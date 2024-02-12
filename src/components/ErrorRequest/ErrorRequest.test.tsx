import '@testing-library/jest-dom';

import rendererWithAllProviders from '../../tests/helpers/rendererWithProviders';
import ErrorRequest from './ErrorRequest';

describe('ErrorRequest Tests', () => {
  test('renders the ErrorRequest UI component', () => {
    const snapshot = rendererWithAllProviders(<ErrorRequest />);
    expect(snapshot).toMatchSnapshot();
  });
});
