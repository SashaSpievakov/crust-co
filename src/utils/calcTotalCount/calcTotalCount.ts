import { ICartItem } from '@src/models';

export const calcTotalCount = (items: ICartItem[]): number => {
  return items.reduce((sum, obj) => obj.count + sum, 0);
};
