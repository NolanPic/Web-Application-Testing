import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {

  const [ balls, setBalls ] = useState(0);
  const [ strikes, setStrikes ] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <Dashboard setBalls={setBalls} setStrikes={setStrikes} />
      </header>
    </div>
  );
}

export default App;
