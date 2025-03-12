"use client"

import React, { useState } from 'react';
import styled from 'styled-components';

const HamburguerButton = ({isOpen, setIsOpen}) => {

  return (
    <StyledButton onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
      <svg viewBox="0 0 32 32" className={isOpen ? 'open' : ''}>
        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
        <path className="line" d="M7 16 27 16" />
      </svg>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    height: 3em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: var(--foreground);
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  svg.open {
    transform: rotate(-45deg);
  }

  svg.open .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;

export default HamburguerButton;