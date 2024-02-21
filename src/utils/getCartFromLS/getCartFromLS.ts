import { ICartItem } from 'src/models';

import { calcTotalCount } from '../calcTotalCount';
import { calcTotalPrice } from '../calcTotalPrice';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items: ICartItem[] = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);
  const itemsCount = calcTotalCount(items);

  return {
    items,
    totalPrice,
    itemsCount,
  };
};
