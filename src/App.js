import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MyMapComponent from './components/MyMapComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MyMapComponent />
      </div>
    );
  }
}

export default App;
