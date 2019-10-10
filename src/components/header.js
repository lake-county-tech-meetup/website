import { Link } from 'gatsby';
import React from 'react';

const Header = () => (
  <header>
    <div className="container">
      <h1></h1>
      <Link to="/">Home</Link>
      <Link to="/about-us/">About Us</Link>
    </div>
  </header>
);

export default Header;
