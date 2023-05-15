import '@testing-library/jest-dom';

import ErrorRequest from './ErrorRequest';
import rendererWithAllProviders from '../../tests/helpers/rendererWithProviders';

describe('ErrorRequest Tests', () => {
  test('renders the ErrorRequest UI component', () => {
    const snapshot = rendererWithAllProviders(<ErrorRequest />);
    expect(snapshot).toMatchSnapshot();
  });
});
