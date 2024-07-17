"use client"; // Add this line at the top

import { useState } from 'react';

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      width: '100vw',
      backgroundColor: isClicked ? 'white' : 'red' 
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
      >
        {isClicked ? 'Sharel' : 'PANGET'}
      </button>
    </div>
  );
};

export default Button;