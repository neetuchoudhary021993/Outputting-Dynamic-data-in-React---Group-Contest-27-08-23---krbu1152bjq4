import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
const[name, setName] = useState("");

    const handleButtonClick = () => {
    const textPara = document.getElementById('text');
    textPara.textContent = `Hello my name is ${name} and I study at Newton School`;
  };

  return (
    <div id="main">
      <input id='input' onChange={(e) => {setName(e.target.value)}></input>
      <button id='button' onClick={handleButtonClick}>Click</button>
      <p id='text'> Hello my name is {name} and I study at Newton School</p>
    </div>
  )
}


export default App;
