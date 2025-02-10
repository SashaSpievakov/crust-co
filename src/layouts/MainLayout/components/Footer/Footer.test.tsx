import '@testing-library/jest-dom';

import { rendererWithProviders } from '@src/tests/helpers';

import { Footer } from './Footer';

describe('Footer tests', () => {
  test('should render the Footer component', () => {
    const snapshot = rendererWithProviders(<Footer />);
    expect(snapshot).toMatchSnapshot();
  });
});
