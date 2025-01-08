import '@testing-library/jest-dom';

import { rendererWithProviders } from '../../tests/helpers';
import { NotFoundPage } from './NotFoundPage';

describe('NotFound tests', () => {
  test('should render the NotFound page', () => {
    const snapshot = rendererWithProviders(<NotFoundPage />);
    expect(snapshot).toMatchSnapshot();
  });
});
