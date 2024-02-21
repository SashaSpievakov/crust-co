import '@testing-library/jest-dom';

import { rendererWithProviders } from '../../tests/helpers';
import { NotFoundPage } from './NotFoundPage';

describe('NotFound Tests', () => {
  test('renders the NotFound page', () => {
    const snapshot = rendererWithProviders(<NotFoundPage />);
    expect(snapshot).toMatchSnapshot();
  });
});
