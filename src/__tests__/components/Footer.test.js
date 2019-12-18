import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Footer from 'components/Footer';

const setup = () => {
  const utils = render(<Footer />);

  return {
    ...utils,
  };
};

describe(`Test Suite for Basic Footer Component Behavior`, () => {
  test(`should render correct footer built with content`, () => {
    const { getByText } = setup();

    expect(getByText(`Gatsby`).innerHTML).toBe(`Gatsby`);
  });
  test(`should render Footer`, async () => {
    const footer = await setup().findByTestId(`footer-id`);

    expect(footer).toBeInTheDocument();
  });
});
