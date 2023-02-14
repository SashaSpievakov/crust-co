import { RootState } from '../../../../store';

// eslint-disable-next-line import/prefer-default-export
export const selectCart = (state: RootState) =>
  state?.cart || { items: [], itemsCount: 0, totalPrice: 0 };
