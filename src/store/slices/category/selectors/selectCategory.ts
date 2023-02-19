import { RootState } from '../../../store';

export const selectCategory = (state: RootState) =>
  state?.activeCategory?.index || 0;
