import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CartItem from './CartItem';
import { ICartItem } from '../../models/ICartItem';
import rendererWithProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';

const CartItemProps: ICartItem = {
  id: '6',
  name: 'Cheesburger Pizza',
  price: 7,
  size: 14,
  type: 'thin',
  count: 13,
};

const CartItemProps2: ICartItem = {
  id: '2',
  name: 'Pepperoni Pizza',
  price: 9,
  size: 16,
  type: 'traditional',
  count: 1,
};

describe('CartItem Test', () => {
  test('renders the CartItem component', () => {
    const snapshot = rendererWithProviders(<CartItem {...CartItemProps} />);
    expect(snapshot).toMatchSnapshot();
  });

  test('renders the CartItem component with a disabled button', () => {
    const snapshot = rendererWithProviders(<CartItem {...CartItemProps2} />);
    expect(snapshot).toMatchSnapshot();
  });

  describe('Button tests', () => {
    beforeEach(() => {
      renderWithProviders(null, true, '/cart', {
        cart: {
          totalPrice: 100,
          itemsCount: 14,
          items: [CartItemProps, CartItemProps2],
        },
      });
    });

    test('adds item', () => {
      const buttons = screen.getAllByRole('button');
      const count = screen.getByText(/13/i);
      const price = screen.getByText(/91/i);

      userEvent.click(buttons[0]);
      userEvent.click(buttons[0]);

      expect(count).toHaveTextContent('11');
      expect(price).toHaveTextContent('77');
    });

    test('removes item', () => {
      const buttons = screen.getAllByRole('button');
      const count = screen.getByText(/13/i);
      const price = screen.getByText(/91/i);

      userEvent.click(buttons[1]);
      userEvent.click(buttons[1]);

      expect(count).toHaveTextContent('15');
      expect(price).toHaveTextContent('105');
    });

    test('changes global count', () => {
      const buttons = screen.getAllByRole('button');
      const count = screen.getByTestId('cartPageItemsCount');

      userEvent.click(buttons[0]);
      userEvent.click(buttons[1]);
      userEvent.click(buttons[1]);
      userEvent.click(buttons[4]);
      userEvent.click(buttons[4]);

      expect(count).toHaveTextContent('17');
    });

    test('changes global price', () => {
      const buttons = screen.getAllByRole('button');
      const count = screen.getByTestId('cartPageItemsPrice');

      userEvent.click(buttons[0]);
      userEvent.click(buttons[1]);
      userEvent.click(buttons[1]);
      userEvent.click(buttons[4]);
      userEvent.click(buttons[4]);

      expect(count).toHaveTextContent('125');
    });

    test('deletes item', () => {
      const buttons = screen.getAllByRole('button');

      userEvent.click(buttons[2]);
      userEvent.click(buttons[5]);

      expect(
        screen.getByRole('heading', {
          name: /your cart is empty/i,
        }),
      ).toBeInTheDocument();
    });
  });
});
