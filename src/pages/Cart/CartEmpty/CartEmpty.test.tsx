import '@testing-library/jest-dom';

import { rendererWithProviders } from '../../../tests/helpers';
import { CartEmpty } from './CartEmpty';

describe('CartEmpty Tests', () => {
  test('renders the CartEmpty component', () => {
    const snapshot = rendererWithProviders(<CartEmpty />);
    expect(snapshot).toMatchSnapshot();
  });
});
