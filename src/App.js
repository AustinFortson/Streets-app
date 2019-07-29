import React from 'react';
import './App.css';
import Artists from './components/Artists/Artists';
import SimpleAppBar from './components/Appbar/Appbar'

function App() {
  return (
    <div className="App">
      <SimpleAppBar/>
      <Artists/>
    </div>
  );
}

export default App;
