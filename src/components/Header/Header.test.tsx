import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './Header';
import rendererWithProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';

describe('Header Tests', () => {
  test('renders the Header component', () => {
    const snapshot = rendererWithProviders(<Header />);
    expect(snapshot).toMatchSnapshot();
  });

  test('renders the Header component on the Cart page', () => {
    const snapshot = rendererWithProviders(<Header />, '/cart');
    expect(snapshot).toMatchSnapshot();
  });

  test('checks link redirect to the Cart page', () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    renderWithProviders(<Header />, true, '/testing');
    const link = screen.getByTestId('cartLink');

    userEvent.click(link);

    expect(
      screen.getByRole('heading', {
        name: /your cart is empty/i,
      }),
    ).toBeInTheDocument();
  });
});
