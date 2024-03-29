import '@testing-library/jest-dom';

import { rendererWithProviders } from '../../../tests/helpers';
import { Footer } from './Footer';

describe('Footer Tests', () => {
  test('renders the Footer component', () => {
    const snapshot = rendererWithProviders(<Footer />);
    expect(snapshot).toMatchSnapshot();
  });
});
