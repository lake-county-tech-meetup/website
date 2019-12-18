import React from 'react';
import Link from 'components/Link';

const PaginationLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded no-underline hover:no-underline"
    >
      {children}
    </Link>
  );
};

export { PaginationLink };
