import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import CartItem from './CartItem';
import { ICartItem } from '../../models/ICartItem';
import renderWithStoreAndThemeProvider from '../../tests/helpers/renderWithStoreAndThemeProvider';

const CartItemProps: ICartItem = {
  id: '2',
  name: 'Pepperoni Pizza',
  price: 9,
  size: 16,
  type: 'traditional',
  count: 2,
};

describe('Cart Empty Test', () => {
  beforeEach(() => {
    renderWithStoreAndThemeProvider(<CartItem {...CartItemProps} />);
  });

  test('renders image', async () => {
    const image = screen.getByRole('img', { name: /pizza/i });
    expect(image).toBeInTheDocument();
  });

  test('renders heading', () => {
    const heading = screen.getByRole('heading', {
      name: /pepperoni pizza/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test('renders description', () => {
    const description = screen.getByText(/traditional dough, 16 inch/i);
    expect(description).toBeInTheDocument();
  });

  test('renders price', () => {
    const price = screen.getByText(/18\$/i);
    expect(price).toBeInTheDocument();
  });

  describe('test buttons', () => {
    test('renders all buttons', () => {
      const buttons = screen.getAllByRole('button');
      expect(buttons[0]).toBeInTheDocument();
      expect(buttons[0]).toBeEnabled();
      expect(buttons[1]).toBeInTheDocument();
      expect(buttons[2]).toBeInTheDocument();
      expect(buttons[3]).toBeUndefined();
    });
  });
});
