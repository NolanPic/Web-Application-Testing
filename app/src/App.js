import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {

  const [ count, setCount ] = useState({
    balls: 0,
    strikes: 0
  });

  return (
    <div className="App">
      <header className="App-header">
        <Display
          count={count}
        />
        <Dashboard
          count={count}
          setCount={setCount}
        />
      </header>
    </div>
  );
}

export default App;
