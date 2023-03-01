import React from 'react';
import { Link } from 'react-router-dom';
// import '../src/index.css';

function Nav() {
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/continents">Continents</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
