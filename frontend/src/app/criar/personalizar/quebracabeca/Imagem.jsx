"use client";

import { useEffect, useState, useCallback } from "react";

const Imagem = ({ imageSrc, is15 = true, is25, is40 }) => {
  const [pieces, setPieces] = useState([]);
  const [draggedPiece, setDraggedPiece] = useState(null);
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });
  const [dimensions, setDimensions] = useState({ rows: 5, cols: 5 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (imageSrc) {
      const url = URL.createObjectURL(imageSrc);
      setImageUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [imageSrc]);

  useEffect(() => {
    const newDimensions = is15
      ? { rows: 5, cols: 5 }
      : is25
      ? { rows: 8, cols: 8 }
      : is40
      ? { rows: 10, cols: 10 }
      : { rows: 5, cols: 5 };
    setDimensions(newDimensions);
  }, [is15, is25, is40]);

  const loadImage = useCallback(() => {
    if (!imageSrc) return;

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      const maxHeight = window.innerHeight * 0.3;
      const scale = maxHeight / img.naturalHeight;
      const scaledWidth = img.naturalWidth * scale;

      setImgDimensions({ width: scaledWidth, height: maxHeight });
      setContainerSize({ width: scaledWidth, height: maxHeight });
      initializePuzzle(scaledWidth, maxHeight);
    };

    img.onerror = () => console.error("Erro ao carregar a imagem.");
  }, [imageSrc, imageUrl]);

  const initializePuzzle = useCallback(
    (imgWidth, imgHeight) => {
      const pieceWidth = imgWidth / dimensions.cols;
      const pieceHeight = imgHeight / dimensions.rows;

      const initialPieces = Array.from(
        { length: dimensions.rows * dimensions.cols },
        (_, i) => ({
          id: i,
          row: Math.floor(i / dimensions.cols),
          col: i % dimensions.cols,
          top: Math.floor(i / dimensions.cols) * pieceHeight,
          left: (i % dimensions.cols) * pieceWidth,
          backgroundPosition: `-${(i % dimensions.cols) * pieceWidth}px -${Math.floor(i / dimensions.cols) * pieceHeight}px`,
        })
      );

      setPieces(shufflePieces(initialPieces, imgWidth, imgHeight));
    },
    [dimensions]
  );

  const shufflePieces = useCallback(
    (pieces, imgWidth, imgHeight) => {
      const pieceWidth = imgWidth / dimensions.cols;
      const pieceHeight = imgHeight / dimensions.rows;

      return [...pieces]
        .sort(() => Math.random() - 0.5)
        .map((piece, index) => ({
          ...piece,
          top: Math.floor(index / dimensions.cols) * pieceHeight,
          left: (index % dimensions.cols) * pieceWidth,
        }));
    },
    [dimensions]
  );

  const handleDragStart = useCallback((piece) => {
    setDraggedPiece(piece);
  }, []);

  const handleDrop = useCallback(
    (targetPiece) => {
      if (!draggedPiece) return;

      setPieces((prev) =>
        prev.map((piece) => {
          if (piece.id === draggedPiece.id)
            return { ...piece, top: targetPiece.top, left: targetPiece.left };
          if (piece.id === targetPiece.id)
            return { ...piece, top: draggedPiece.top, left: draggedPiece.left };
          return piece;
        })
      );

      setDraggedPiece(null);
    },
    [draggedPiece]
  );

  useEffect(() => {
    if (imageSrc) loadImage();
  }, [imageSrc, loadImage]);

  useEffect(() => {
    if (imgDimensions.width > 0)
      initializePuzzle(imgDimensions.width, imgDimensions.height);
  }, [dimensions, imgDimensions, initializePuzzle]);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <div
        className="relative border-2 border-gray-800 bg-gray-200"
        style={containerSize}
      >
        {imageUrl &&
          pieces.map((piece) => (
            <div
              key={piece.id}
              className="absolute border border-gray-700 cursor-pointer transition-all duration-300"
              style={{
                width: `${imgDimensions.width / dimensions.cols}px`,
                height: `${imgDimensions.height / dimensions.rows}px`,
                top: `${piece.top}px`,
                left: `${piece.left}px`,
                backgroundImage: `url('${imageUrl}')`,
                backgroundPosition: piece.backgroundPosition,
                backgroundSize: `${imgDimensions.width}px ${imgDimensions.height}px`,
              }}
              draggable
              onDragStart={() => handleDragStart(piece)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(piece)}
            />
          ))}
      </div>
    </div>
  );
};

export default Imagem;
