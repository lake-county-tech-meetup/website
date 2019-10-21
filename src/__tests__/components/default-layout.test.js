import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DefaultLayout from '../../components/Layouts/DefaultLayout';

const setup = () => {
  const utils = render(<DefaultLayout />);

  return {
    ...utils,
  };
};

describe(`Name of the group`, () => {
  test(`should `, async () => {
    console.log(setup());
  });
});
