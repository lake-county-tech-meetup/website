import React from 'react';

import { DefaultLayout } from '../components/Layouts';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <DefaultLayout headline="404: Not found">
    <SEO title="404: Not found" />
    <p className="mb-0 text-center">
      The page you are looking for can&apos;t be found.
    </p>
  </DefaultLayout>
);

export default NotFoundPage;
