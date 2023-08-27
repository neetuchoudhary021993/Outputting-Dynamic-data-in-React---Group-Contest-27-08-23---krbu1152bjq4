import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
const[name, setName] = useState("");
const onChange = () => {
  setName(e.target.value);
}
  return (
    <div id="main">
      <input id='input' onChange={}></input>
      <button id='button' onClick={}>Click</button>
      <p id='text'> Hello my name is {name} and I study at Newton School</p>
    </div>
  )
}


export default App;
