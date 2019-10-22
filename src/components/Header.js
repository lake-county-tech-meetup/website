import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import logo from 'assets/images/logo.svg';

const NavLink = ({ to, children }) => (
  <li>
    <Link
      className="block font-bold text-primary hover:text-primary-300 hover:md:text-primary no-underline hover:no-underline py-1 md:px-1 md:border-b-4 md:ml-3 border-transparent sm:hover:border-secondary-100"
      activeClassName="text-secondary hover:text-secondary-200 md:text-primary hover:md:text-primary md:border-secondary"
      to={to}
    >
      {children}
    </Link>
  </li>
);

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header
      className="py-6 bg-white relative z-10 shadow uppercase tracking-wide"
      data-testid="header-id"
    >
      <nav className="container flex flex-wrap items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt={`${siteTitle} logo`}
            className="w-48 md:w-64 hover:opacity-75"
          />
        </Link>
        <div className="block md:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border-2 rounded text-secondary border-secondary hover:text-secondary-700 hover:border-secondary-700"
          >
            <svg
              className="fill-current h-3 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow mt-4 md:mt-0 md:flex md:items-center md:w-auto md:justify-end`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us/">About Us</NavLink>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
