import logo from './logo.svg';
import {Text} from 'react';
import './styles/App.css';

import DpList from './components/DpList';

function App() {
  return (
    <div className="App"> 
      <div className="ControlDiv">
        <h1 className="TextHeader">This is control</h1>
        <DpList />
      </div>
      <div className="ContentDiv">
        <h1 className="TextHeader">This is Content</h1>
      </div>
    </div>
  );
}

export default App;
