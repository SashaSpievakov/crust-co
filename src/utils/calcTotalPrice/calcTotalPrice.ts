import { ICartItem } from '@src/models';

export const calcTotalPrice = (items: ICartItem[]): number => {
  return items.reduce((sum, obj) => obj.count * obj.price + sum, 0);
};
