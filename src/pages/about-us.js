import React from 'react';
import { Link } from 'gatsby';

import { DefaultLayout } from '../components/Layouts';
import SEO from '../components/SEO';

const AboutUs = () => (
  <DefaultLayout headline="About Us">
    <SEO title="About Us" />
    <p>Coming Soon</p>
    {
      // TODO: Add list of cities & villages (for SEO discovery)
      // List available at http://www.lakecountyil.gov/BusinessDirectoryII.aspx?lngBusinessCategoryID=32
    }
    <Link to="/">Go back to the homepage</Link>
  </DefaultLayout>
);

export default AboutUs;
