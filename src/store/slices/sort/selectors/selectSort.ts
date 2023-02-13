import { RootState } from '../../../store';

// eslint-disable-next-line import/prefer-default-export
export const selectSort = (state: RootState) => state?.activeSort?.index || 0;
