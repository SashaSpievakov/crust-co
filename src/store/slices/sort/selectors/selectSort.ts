import { RootState } from '../../../store';

export const selectSort = (state: RootState) => state?.activeSort?.index || 0;
