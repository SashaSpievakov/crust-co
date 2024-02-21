import '@testing-library/jest-dom';

import { rendererWithProviders } from '../../tests/helpers';
import ErrorRequest from './ErrorRequest';

describe('ErrorRequest Tests', () => {
  test('renders the ErrorRequest UI component', () => {
    const snapshot = rendererWithProviders(<ErrorRequest />);
    expect(snapshot).toMatchSnapshot();
  });
});
