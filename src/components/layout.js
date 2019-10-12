/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../assets/stylesheets/style.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="md:bg-grey-100 md:py-10">
        <div className="container bg-white p-8 md:rounded md:shadow">
          {children}
        </div>
      </main>
      <footer className="py-4">
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
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
