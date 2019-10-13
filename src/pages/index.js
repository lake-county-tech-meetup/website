import React from 'react';

import { useFetchJson } from '../hooks/useFetchJson';
import { DefaultLayout } from '../components/Layouts';
import SEO from '../components/seo';

const IndexPage = () => (
  <DefaultLayout headline={useFetchJson(`headerHome`)}>
    <SEO title="Home" />
    <section>
      <p>{useFetchJson(`summaryBlockHome`)}</p>
      {
        // I also suggest Better Comments extension if using VSCode because I use it a lot.
        // Link: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments - Jacob
      }
      <q className="text-center block">{useFetchJson(`quote`)}</q>
      <cite className="text-center block">{useFetchJson(`quoteCite`)}</cite>
    </section>
    {
      //! Make into issues
      // TODO: Venue information and map
      // TODO: Contact information
      // TODO: Submission field for email / Contact Us
    }
  </DefaultLayout>
);

export default IndexPage;
