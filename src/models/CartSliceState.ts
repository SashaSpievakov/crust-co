import { ICartItem } from './ICartItem';

export interface CartSliceState {
  totalPrice: number;
  itemsCount: number;
  items: ICartItem[];
}
