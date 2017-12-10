import React, { Component } from 'react';
import logo from './tmdb_logo.jpg';
import './App.css';
import ApiCaller from "./Components/apicaller/apicaller";
import Body from './Components/body/body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>The Movie Database </h1><p><a href='https://www.themoviedb.org'>tmdb.org</a></p>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
        <div><ApiCaller /></div>
        <div><Body /></div>
      </div>
    );
  }
}

export default App;
