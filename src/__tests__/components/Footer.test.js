import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../../components/footer';

const setup = () => {
  const utils = render(<Footer />);

  return {
    ...utils,
  };
};

describe(`Footer Component`, () => {
  test(`should render correct footer content`, () => {
    const { getByText } = setup();

    expect(getByText(`Gatsby`)).toHaveTextContent(`Gatsby`);
  });
});
