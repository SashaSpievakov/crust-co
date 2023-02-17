import '@testing-library/jest-dom';

import NotFound from './NotFound';
import rendererWithProviders from '../../tests/helpers/rendererWithProviders';

describe('NotFound Tests', () => {
  test('renders the NotFound page', () => {
    const snapshot = rendererWithProviders(<NotFound />);
    expect(snapshot).toMatchSnapshot();
  });
});
