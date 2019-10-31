import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from 'components/Header';
import Footer from 'components/Footer';
import 'assets/stylesheets/webfonts.css';
import 'assets/stylesheets/style.css';

const LayoutWrapper = ({ children }) => {
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
      <section className="flex-grow md:bg-grey-100 md:py-10">
        {children}
      </section>
      <Footer />
    </>
  );
};

LayoutWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWrapper;
