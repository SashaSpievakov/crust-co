import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  rendererWithProviders,
  renderWithProvidersAndRoutes,
} from '@src/tests/helpers';
import {
  CartItemMockProps,
  CartItemMockProps2,
  CartItemsMockProps,
} from '@src/tests/mocks/mockData/mockData';

import { CartItem } from './CartItem';

describe('CartItem tests', () => {
  test('should render the CartItem component', () => {
    const snapshot = rendererWithProviders(<CartItem {...CartItemMockProps} />);
    expect(snapshot).toMatchSnapshot();
  });

  test('should render the CartItem component with a disabled button', () => {
    const snapshot = rendererWithProviders(
      <CartItem {...CartItemMockProps2} />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  describe('CartItem button tests', () => {
    beforeEach(() => {
      renderWithProvidersAndRoutes(null, true, '/cart', {
        cart: CartItemsMockProps,
      });
    });

    test('should remove an item', () => {
      const buttons = screen.getAllByRole('button');
      const count = screen.getByText(/13/i);
      const price = screen.getByText(/91/i);

      userEvent.click(buttons[0]);
      userEvent.click(buttons[0]);

      expect(count).toHaveTextContent('11');
      expect(price).toHaveTextContent('77');
    });

    test('should add an item', () => {
      const buttons = screen.getAllByRole('button');
      const count = screen.getByText(/13/i);
      const price = screen.getByText(/91/i);

      userEvent.click(buttons[1]);
      userEvent.click(buttons[1]);

      expect(count).toHaveTextContent('15');
      expect(price).toHaveTextContent('105');
    });

    test('should delete all item', () => {
      const buttons = screen.getAllByRole('button');

      userEvent.click(buttons[2]);
      userEvent.click(buttons[5]);

      expect(
        screen.getByRole('heading', {
          name: /your cart is empty/i,
        }),
      ).toBeInTheDocument();
    });

    test('should change global count', () => {
      const buttons = screen.getAllByRole('button');
      const count = screen.getByTestId('cartPageItemsCount');

      userEvent.click(buttons[0]);
      userEvent.click(buttons[1]);
      userEvent.click(buttons[1]);
      userEvent.click(buttons[4]);
      userEvent.click(buttons[4]);

      expect(count).toHaveTextContent('17');
    });

    test('should change global price', () => {
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
