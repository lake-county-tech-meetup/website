import React from 'react';
import Link from 'components/Link';

const MapLink = ({ address, name }) => {
  const destination = `https://www.google.com/maps/search/?api=1&query=${address}`;
  return (
    <Link
      to={destination}
      target="_blank"
      rel="noopener"
      className="text-grey-600 hover:text-grey-800 no-underline"
    >
      {name}
    </Link>
  );
};

export default MapLink;
