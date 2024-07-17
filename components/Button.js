"use client"; // Add this line at the top

import { useState } from 'react';
import confetti from 'canvas-confetti';

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);

    const duration = 3000;
    const { innerWidth, innerHeight } = window;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;

    // Fire confetti
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
      colors: ['#26cc7e', '#5fdde5', '#9c88ff', '#e8e65e'],
    });
    setTimeout(() => {
        confetti.reset();
      }, duration);
    
    
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      width: '100vw',
      backgroundColor: isClicked ? 'red' : 'white' 
    }}>
      <button 
        onClick={handleClick} 
        style={{ 
          padding: '20px', 
          fontSize: '20px', 
          backgroundColor: 'lightgray', 
          border: 'none', 
          borderRadius: '5px' 
        }}
        class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."

      >
        {isClicked ? 'PANGET' : 'Sharel'}
      </button>
    </div>
  );
};

export default Button;