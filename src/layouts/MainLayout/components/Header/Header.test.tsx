import '@testing-library/jest-dom';

import {
  rendererWithProviders,
  renderWithProvidersAndRoutes,
} from '@src/tests/helpers';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Header } from './Header';

describe('Header Tests', () => {
  test('should render the Header component', () => {
    const snapshot = rendererWithProviders(<Header />);
    expect(snapshot).toMatchSnapshot();
  });

  test('should render the Header component on the Cart page', () => {
    const snapshot = rendererWithProviders(<Header />, '/cart');
    expect(snapshot).toMatchSnapshot();
  });

  test('should redirect to the Cart page', () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    renderWithProvidersAndRoutes(<Header />, true, '/testing');
    const link = screen.getByTestId('cartLink');

    userEvent.click(link);

    expect(
      screen.getByRole('heading', {
        name: /your cart is empty/i,
      }),
    ).toBeInTheDocument();
  });
});
