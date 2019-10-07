import React from 'react';
import Header from './components/Header.js'
import Widget from './components/Widget.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Widget city= "mksk"/>
    </div>
  );
}

export default App;
