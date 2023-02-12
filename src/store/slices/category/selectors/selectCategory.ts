import { RootState } from '../../../store';

// eslint-disable-next-line import/prefer-default-export
export const selectCategory = (state: RootState) =>
  state?.activeCategory?.index || 0;
