import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../../components/header';

const setup = () => {
  const utils = render(<Header />);

  return {
    ...utils,
  };
};

describe(`Test Suite for Basic Header Component Behavior`, () => {
  test(`should check Header renders under normal conditions`, async () => {
    const header = await setup().findByTestId(`header-id`);

    expect(header).toBeInTheDocument();
  });
  test(`should be able to click on About for navigating`, async () => {
    const aboutUs = await setup().findByText(`About Us`);
    fireEvent.click(aboutUs);

    // TODO: The header needs something that changes dynamically based on its current route
    expect(aboutUs).toBeInTheDocument();
  });
  test(`should confirm the logo rendered`, async () => {
    const logo = setup().getByAltText(`logo`);
    expect(logo.tagName).toBe(`IMG`);
    expect(logo).toBeInTheDocument();
  });
});
