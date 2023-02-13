import { RootState } from '../../../store';

// eslint-disable-next-line import/prefer-default-export
export const selectIsLight = (state: RootState) =>
  state.theme ? state.theme.isLight : true;
