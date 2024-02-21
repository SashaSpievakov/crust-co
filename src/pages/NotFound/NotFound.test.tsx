import '@testing-library/jest-dom';

import { rendererWithProviders } from '../../tests/helpers';
import NotFound from './NotFound';

describe('NotFound Tests', () => {
  test('renders the NotFound page', () => {
    const snapshot = rendererWithProviders(<NotFound />);
    expect(snapshot).toMatchSnapshot();
  });
});
