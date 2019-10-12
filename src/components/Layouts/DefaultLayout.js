import React from 'react';
import LayoutWrapper from './LayoutWrapper';

const DefaultLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      <main className="container bg-white p-8 md:rounded md:shadow">
        {children}
      </main>
    </LayoutWrapper>
  );
};

export default DefaultLayout;
