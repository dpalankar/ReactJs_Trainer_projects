import React from 'react';
import './App.css';
import Cockpit from './Cockpit/Cockpit-view';
function App() {
  let name = "Akash";
  return (
    <div className="Base">
      <div className="contentContainer">
        <Cockpit/>
      </div>
    </div>
  );
}
export default App;
