import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import CartEmpty from './CartEmpty';
import renderWithProviders from '../../tests/helpers/renderWithAllProviders';

describe('Cart Empty Test', () => {
  beforeEach(() => {
    renderWithProviders(<CartEmpty />);
  });

  test('renders heading', () => {
    const heading = screen.getByText(/Your cart is empty/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders description', () => {
    const description = screen.getByText(/If you want to make an order,/i);
    expect(description).toBeInTheDocument();
  });

  test('checks link to the home page', () => {
    const link = screen.getByRole('link', {
      name: /go back/i,
    });
    userEvent.click(link);
    expect(screen.getByText(/all pizzas/i)).toBeInTheDocument();
  });
});
