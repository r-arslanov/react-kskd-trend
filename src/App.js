// import logo from './logo.svg';
import React, { useState } from 'react';
import './styles/App.css';

import DpList from './components/DpList';
import ObjList from './components/ObjList';

// function bindClick(type){
//   updateType(type);
// }

function App() {
  const [type, updType] = useState(0);
  return (
    <div className="App"> 
      <div className="ControlDiv">
        <ObjList bindClick={(type) => updType(type)}/>
        <DpList type={type} />
      </div>
      <div className="ContentDiv">
        <h1 className="TextHeader">This is Content</h1>
      </div>
    </div>
  );
}

export default App;
