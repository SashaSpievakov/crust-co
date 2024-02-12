import { ICartItem } from '../../../../../models/ICartItem';
import { RootState } from '../../../../store';

export const selectCurrentItemCount =
  (name: string, size: number, type: string) => (state: RootState) => {
    if (!state.cart) return 0;

    const selectedItem: ICartItem | undefined = state.cart.items.find(
      (obj) => obj.name === name && obj.size === size && obj.type === type,
    );

    return selectedItem ? selectedItem.count : 0;
  };
