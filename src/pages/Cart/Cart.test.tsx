import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import rendererWithProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import { CartItemsMockProps } from '../../tests/mocks/mockData/mockData';
import Cart from './Cart';

describe('Cart Tests', () => {
  test('renders the Cart page', () => {
    const snapshot = rendererWithProviders(<Cart />);
    expect(snapshot).toMatchSnapshot();
  });

  test('renders the Cart page with items', () => {
    const snapshot = rendererWithProviders(<Cart />, '/', {
      cart: CartItemsMockProps,
    });
    expect(snapshot).toMatchSnapshot();
  });

  test('deletes all items from the cart', () => {
    renderWithProviders(<Cart />, false, '/', {
      cart: CartItemsMockProps,
    });
    const deleteButton = screen.getByText(/delete all items/i);

    userEvent.click(deleteButton);

    expect(screen.getByRole('heading')).toHaveTextContent(
      /your cart is empty 😕/i,
    );
  });

  test('checks redirect to the Home page', () => {
    renderWithProviders(null, true, '/cart', {
      cart: CartItemsMockProps,
    });
    const link = screen.getByRole('link', {
      name: /go back/i,
    });

    userEvent.click(link);

    expect(screen.getByText(/all pizzas/i)).toBeInTheDocument();
  });
});
