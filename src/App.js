import logo from './logo.svg';
import {Text} from 'react';
import './styles/App.css';

/* 
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
*/


function App() {
  return (
    <div className="App"> 
      <div className="ControlDiv">
        <h1 className="TextHeader">This is control</h1>
      </div>
      <div className="ContentDiv">
        <h1 className="TextHeader">This is Content</h1>
      </div>
    </div>
  );
}

export default App;
