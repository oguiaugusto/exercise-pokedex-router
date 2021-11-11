import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() { 
    return (
      <nav className="nav-bar">
        <ul>
          <li><Link to="/">Pokédex</ Link></li>
          <li><Link to="/about">About</ Link></li>
          <li><Link to="/favorite-pokemons">Favorite Pokemons</ Link></li>
        </ul>
      </nav>
    );
  }
}
 
export default NavBar;