import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './Header';
import rendererWithProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';

describe('Header Test', () => {
  test('renders the Header component', () => {
    const snapshot = rendererWithProviders(<Header />);
    expect(snapshot).toMatchSnapshot();
  });

  test('renders the Header component on the Cart page', () => {
    const snapshot = rendererWithProviders(<Header />);
    expect(snapshot).toMatchSnapshot();
  });

  test('checks link redirect to the Cart page', () => {
    renderWithProviders(<Header />);
    const links = screen.getByTestId('cartLink');

    userEvent.click(links);
    expect(screen.queryByRole('cartLink')).toBeNull();
  });
});