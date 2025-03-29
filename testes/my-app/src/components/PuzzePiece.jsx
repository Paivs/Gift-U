import React from 'react';
import styles from '../styles/PuzzlePiece.module.css'; // Crie este arquivo

const PuzzlePiece = ({ imageUrl, size, position, index }) => {
  const pieceStyle = {
    width: `${size}px`,
    height: `${size}px`,
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `-${position.x}px -${position.y}px`,
    backgroundSize: `${size * 4}px ${size * 5}px`, // Ajuste com o número de linhas/colunas
    clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`, // Quadrado simples por enquanto
  };

  return (
    <div
      className={styles.puzzlePiece}
      style={pieceStyle}
      draggable="true"
      onDragStart={(e) => {
        e.dataTransfer.setData("pieceIndex", index); // Passe o índice
      }}
    ></div>
  );
};

export default PuzzlePiece;