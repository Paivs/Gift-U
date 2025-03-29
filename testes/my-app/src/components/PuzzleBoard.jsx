"use client";

import React, { useState, useRef } from 'react';
import PuzzlePiece from './PuzzePiece';
import styles from '../styles/PuzzlePiece.module.css'; // Crie este arquivo

const PuzzleBoard = ({ numRows, numCols, imageUrl }) => {
  const boardRef = useRef(null);
  const [pieces, setPieces] = useState(() => {
    const pieceSize = 200; // Ajuste o tamanho da peça
    const initialPieces = [];
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        initialPieces.push({
          id: `${row}-${col}`,
          size: pieceSize,
          position: { x: col * pieceSize, y: row * pieceSize },
          correctPosition: { x: col * pieceSize, y: row * pieceSize }, // Posição correta
          currentPosition: { x: Math.random() * 500 + 600, y: Math.random() * 300 + 50 },  // Posição inicial aleatória
        });
      }
    }
    return initialPieces;
  });

  const handleDrop = (e) => {
    e.preventDefault();
    const pieceIndex = e.dataTransfer.getData("pieceIndex");
    const newPieces = [...pieces];
    const rect = boardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - newPieces[pieceIndex].size / 2;
    const y = e.clientY - rect.top - newPieces[pieceIndex].size / 2;

    newPieces[pieceIndex] = { ...newPieces[pieceIndex], currentPosition: { x, y } };
    setPieces(newPieces);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Permite o drop
  };

  return (
    <div
      className={styles.puzzleBoard}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ width: `${numCols * pieces[0].size}px`, height: `${numRows * pieces[0].size}px` }}
      ref={boardRef}
    >
      {pieces.map((piece, index) => (
        <PuzzlePiece
          key={piece.id}
          imageUrl={imageUrl}
          size={piece.size}
          position={piece.currentPosition}
          index={index}
        />
      ))}
    </div>
  );
};

export default PuzzleBoard;