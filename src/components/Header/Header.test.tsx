import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './Header';
import rendererWithAllProviders from '../../tests/helpers/rendererWithProviders';
import renderWithAllProviders from '../../tests/helpers/renderWithProviders';

describe('Header Test', () => {
  test('renders the Header component', () => {
    const snapshot = rendererWithAllProviders(<Header />);
    expect(snapshot).toMatchSnapshot();
  });

  test('renders the Header component on the Cart page', () => {
    const snapshot = rendererWithAllProviders(<Header />, true, '/cart');
    expect(snapshot).toMatchSnapshot();
  });

  test('checks link redirect to the Cart page', () => {
    renderWithAllProviders(<Header />);
    const links = screen.getByTestId('cartLink');

    userEvent.click(links);
    expect(screen.queryByRole('cartLink')).toBeNull();
  });
});
