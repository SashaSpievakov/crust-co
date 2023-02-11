import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CartItem from './CartItem';
import rendererWithProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import {
  CartItemMockProps,
  CartItemMockProps2,
  CartItemsMockProps,
} from '../../tests/mocks/mockData/mockData';

describe('CartItem Tests', () => {
  test('renders the CartItem component', () => {
    const snapshot = rendererWithProviders(<CartItem {...CartItemMockProps} />);
    expect(snapshot).toMatchSnapshot();
  });

  test('renders the CartItem component with a disabled button', () => {
    const snapshot = rendererWithProviders(
      <CartItem {...CartItemMockProps2} />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  describe('Button tests', () => {
    beforeEach(() => {
      renderWithProviders(null, true, '/cart', {
        cart: CartItemsMockProps,
      });
    });

    test('removes item', () => {
      const buttons = screen.getAllByRole('button');
      const count = screen.getByText(/13/i);
      const price = screen.getByText(/91/i);

      userEvent.click(buttons[0]);
      userEvent.click(buttons[0]);

      expect(count).toHaveTextContent('11');
      expect(price).toHaveTextContent('77');
    });

    test('adds item', () => {
      const buttons = screen.getAllByRole('button');
      const count = screen.getByText(/13/i);
      const price = screen.getByText(/91/i);

      userEvent.click(buttons[1]);
      userEvent.click(buttons[1]);

      expect(count).toHaveTextContent('15');
      expect(price).toHaveTextContent('105');
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
  });
});
