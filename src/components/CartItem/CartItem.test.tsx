import '@testing-library/jest-dom';

import CartItem from './CartItem';
import { ICartItem } from '../../models/ICartItem';
import rendererWithStoreAndTheme from '../../tests/helpers/renderer/rendererWithStoreAndTheme';

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
    const snapshot = rendererWithStoreAndTheme(<CartItem {...CartItemProps} />);
    expect(snapshot).toMatchSnapshot();
  });

  test('renders the CartItem component with a disabled button', () => {
    const snapshot = rendererWithStoreAndTheme(
      <CartItem {...CartItemProps2} />,
    );
    expect(snapshot).toMatchSnapshot();
  });
});
