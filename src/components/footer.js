import React from 'react';

const Footer = () => (
  <footer className="py-4 shadow" data-testid="footer-id">
    <div className="container text-center text-grey-600">
      © {new Date().getFullYear()} &middot; Built with
      <a href="https://www.gatsbyjs.org" className="text-grey-800 no-underline">
        Gatsby
      </a>
    </div>
  </footer>
);

export default Footer;
