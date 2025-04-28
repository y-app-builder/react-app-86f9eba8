import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h1>Click Counter</h1>
      <div style={{ 
        fontSize: '3rem', 
        margin: '1rem 0', 
        padding: '1rem', 
        borderRadius: '8px', 
        backgroundColor: '#f0f0f0', 
        minWidth: '100px', 
        textAlign: 'center' 
      }}>
        {count}
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          onClick={decrementCount} 
          style={{ 
            padding: '0.5rem 1rem', 
            fontSize: '1rem', 
            backgroundColor: '#ff6b6b', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Decrement
        </button>
        <button 
          onClick={resetCount} 
          style={{ 
            padding: '0.5rem 1rem', 
            fontSize: '1rem', 
            backgroundColor: '#4d4d4d', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Reset
        </button>
        <button 
          onClick={incrementCount} 
          style={{ 
            padding: '0.5rem 1rem', 
            fontSize: '1rem', 
            backgroundColor: '#4ecdc4', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default App;