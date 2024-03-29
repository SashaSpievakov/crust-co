import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  rendererWithProviders,
  renderWithProvidersAndRoutes,
} from '../../tests/helpers';
import { CartItemsMockProps } from '../../tests/mocks/mockData/mockData';
import { CartPage } from './CartPage';

describe('Cart Tests', () => {
  test('renders the Cart page', () => {
    const snapshot = rendererWithProviders(<CartPage />);
    expect(snapshot).toMatchSnapshot();
  });

  test('renders the Cart page with items', () => {
    const snapshot = rendererWithProviders(<CartPage />, '/', {
      cart: CartItemsMockProps,
    });
    expect(snapshot).toMatchSnapshot();
  });

  test('deletes all items from the cart', () => {
    renderWithProvidersAndRoutes(<CartPage />, false, '/', {
      cart: CartItemsMockProps,
    });
    const deleteButton = screen.getByText(/delete all items/i);

    userEvent.click(deleteButton);

    expect(screen.getByRole('heading')).toHaveTextContent(
      /your cart is empty 😕/i,
    );
  });

  test('checks redirect to the Home page', () => {
    renderWithProvidersAndRoutes(null, true, '/cart', {
      cart: CartItemsMockProps,
    });
    const link = screen.getByRole('link', {
      name: /go back/i,
    });

    userEvent.click(link);

    expect(screen.getByText(/all pizzas/i)).toBeInTheDocument();
  });
});
