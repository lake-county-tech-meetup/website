import React from 'react';

import { useFetchJson } from '../hooks/useFetchJson';
import { DefaultLayout } from '../components/Layouts';
import SEO from '../components/SEO';

const IndexPage = () => (
  <DefaultLayout>
    <SEO title="Home" />
    <section>
      <h1>{useFetchJson(`headerHome`)}</h1>
      <p>{useFetchJson(`summaryBlockHome`)}</p>
      {
        // ? We can change the quote however I think a good quote would be well placed here.
        // I also suggest Better Comments extension if using VSCode because I use it a lot.
        // Link: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments - Jacob
      }
      <q className="text-center block">{useFetchJson(`quote`)}</q>
      <cite className="text-center block">{useFetchJson(`quoteCite`)}</cite>
    </section>
    {
      // TODO: Venue information and map
      // TODO: Contact information
      // TODO: Submission field for email / Contact Us
    }
  </DefaultLayout>
);

export default IndexPage;
