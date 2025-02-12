import { RootState } from '@src/store';

export const selectCart = (state: RootState) =>
  state?.cart || { items: [], itemsCount: 0, totalPrice: 0 };
