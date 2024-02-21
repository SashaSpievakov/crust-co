import { ICartItem } from '../../../../../models';
import { RootState } from '../../../../store';

export const selectItemsCount = (id: string) => (state: RootState) => {
  if (!state.cart) return 0;

  const selectedItems: ICartItem[] = state.cart.items.filter(
    (obj) => obj.id === id,
  );

  const count: number = selectedItems.reduce(
    (currenCount: number, item: ICartItem) => {
      return item.count + currenCount;
    },
    0,
  );

  return count;
};
