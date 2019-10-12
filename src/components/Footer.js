import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 shadow">
      <div className="container text-center text-grey-600">
        © {new Date().getFullYear()} &middot; Built with{' '}
        <a
          href="https://www.gatsbyjs.org"
          className="text-grey-800 no-underline"
        >
          Gatsby
        </a>
      </div>
    </footer>
  );
};

export default Footer;
