import React from 'react';
import LayoutWrapper from './LayoutWrapper';

const DefaultLayout = ({ children, headline }) => (
  <LayoutWrapper>
    <div className="container">
      {headline && (
        <h1 className="text-center text-primary font-bold mt-8 md:mt-0 md:mb-6 text-4xl">
          {headline}
        </h1>
      )}
      <main className="bg-white p-8 md:rounded md:shadow mx-auto max-w-4xl">
        {children}
      </main>
    </div>
  </LayoutWrapper>
);

export default DefaultLayout;
