import { RootState } from '../../../store';

export const selectIsLight = (state: RootState) =>
  state.theme ? state.theme.isLight : true;
