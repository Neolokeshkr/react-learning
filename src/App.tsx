import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {

  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <div>Welcome to React Learning Tutorial</div>
    </div>
  );
}

export default App;
