import { ICartItem } from '../../models/ICartItem';

export const calcTotalCount = (items: ICartItem[]): number => {
  return items.reduce((sum, obj) => obj.count + sum, 0);
};
