import React from 'react';

import { useFetchJson } from '../hooks/useFetchJson';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h1>{useFetchJson(`headerHome`)}</h1>
      <p>{useFetchJson(`summaryBlockHome`)}</p>
      {
        // ? We can change the quote however I think a good quote would be well placed here.
        // I also suggest Better Comments extension if using VSCode because I use it a lot.
        // Link: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments - Jacob
      }
      <q style={{ fontFamily: `Roboto`, fontWeight: `bold` }}>
        {useFetchJson(`quote`)}
      </q>
    </section>
    <div
      style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}
      alt="image icons of programming technologies"
    >
      <Image />
    </div>
    <div>PLACEHOLDER FOR MAP AND VENUE LOCATION INFO</div>
    <div>PLACEHOLDER CONTACT INFO</div>
    <div>PLACEHOLDER SUBMISSION FIELD FOR EMAIL/CONTACT US</div>
  </Layout>
);

export default IndexPage;
