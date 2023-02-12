import { RootState } from '../../../store';

// eslint-disable-next-line import/prefer-default-export
export const selectSearchValue = (state: RootState) =>
  state?.searchValue?.value || '';
