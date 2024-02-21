import { ICartItem } from '../../models/ICartItem';

export const calcTotalPrice = (items: ICartItem[]): number => {
  return items.reduce((sum, obj) => obj.count * obj.price + sum, 0);
};
