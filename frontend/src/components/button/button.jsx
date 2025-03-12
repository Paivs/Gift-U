"use client"

import React from 'react';

const Button = ({message, applyClass, href, onClickButton}) => {
  const handleClick = (e) => {
    if(onClickButton){
      onClickButton()
    }
    if(href) {
      e.preventDefault();
      window.location.href = href;
    }
  }
  return (
    <button className={`${applyClass} z-30 bg-foreground rounded-md text-background relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-accent after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700`} onClick={handleClick}>
      {message}
    </button>
  );
}

export default Button;
