import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Neuro Styles</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/shirts">Shirts</a></li>
          <li><a href="/sweatshirts">Sweatshirts</a></li>
          <li><a href="/hats">Hats</a></li>
          <li><a href="/pants">Pants</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
