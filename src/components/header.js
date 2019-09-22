import { Link } from 'gatsby';
import React from 'react';

const headerNameStyle = {
  color: `white`,
  textDecoration: `none`,
  marginRight: `2vw`,
};
const Header = () => (
  <header
    style={{
      background: `darkcyan`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ display: `flex`, margin: 0, justifyContent: `flex-start` }}>
        <Link
          to="/"
          style={{
            ...headerNameStyle,
          }}
        >
          Home
        </Link>
        <Link
          to="/about-us/"
          style={{
            ...headerNameStyle,
          }}
        > About Us
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
