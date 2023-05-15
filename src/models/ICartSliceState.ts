import { ICartItem } from './ICartItem';

export interface ICartSliceState {
  totalPrice: number;
  itemsCount: number;
  items: ICartItem[];
}
