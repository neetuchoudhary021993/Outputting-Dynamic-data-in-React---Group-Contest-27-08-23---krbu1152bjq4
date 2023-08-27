import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [name, setName] = useState('');
  const [displayText, setDisplayText] = useState(''); // State to store the display text

  const handleButtonClick = () => {
    setDisplayText(` Hello my name is ${name} and I study at Newton School`);
  };

  return (
    <div id="main">
      <input
        id="input"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button id="button" onClick={handleButtonClick}>Click</button>
      
      <p id="text">{displayText}</p>
    </div>
  );
}

export default App;

