import React, { Component } from 'react';
import burger from './../burger.png';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={burger} className="App-logo" alt="logo" />
          <h2>Mmmm You Seem Hungry!</h2>
        </div>
      </div>
    );
  }
}

export default Header;
