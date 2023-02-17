import '@testing-library/jest-dom';

import CartEmpty from './CartEmpty';
import rendererWithProviders from '../../tests/helpers/rendererWithProviders';

describe('CartEmpty Tests', () => {
  test('renders the CartEmpty component', () => {
    const snapshot = rendererWithProviders(<CartEmpty />);
    expect(snapshot).toMatchSnapshot();
  });
});
