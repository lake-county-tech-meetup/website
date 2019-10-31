import React from 'react';
import Link from 'components/Link';
import MapLink from 'components/MapLink';

const EventCard = ({ pagePath, title, startDate, venue, description }) => {
  return (
    <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-2">
        <p className="text-sm text-grey-600 flex items-center" />

        <Link
          className="text-grey-900 font-bold text-3xl mb-2 no-underline hover:no-underline"
          to={pagePath}
        >
          {title}
        </Link>

        <p className="text-grey-700 text-base">{description}</p>
      </div>
      <div className="flex items-center">
        <div className="text-sm">
          <MapLink address={venue.address} name={venue.name} />
          <span className="text-grey-600 ml-2">{startDate}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
