import React from 'react';
import Header from './components/Header.js'
import Widget from './components/Widget.js'
import './App.css';

function App() {

  let search = window.location.search;
  let params = new URLSearchParams(search);
  let city = params.get('city');


  return (
    <div className="App">
      <Header/>
      <Widget city={city}/>
    </div>
  );
}

export default App;
