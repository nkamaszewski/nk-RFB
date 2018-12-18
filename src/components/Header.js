import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span>
          day
        </h1>
        <h3 className="tagline">
          <span>Fresh Seafood Market</span>
        </h3>
      </header>
    );
  }
}

export default Header;
