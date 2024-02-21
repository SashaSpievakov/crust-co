import '@testing-library/jest-dom';

import { rendererWithProviders } from '../../../tests/helpers';
import { Loading } from './Loading';

describe('Loading Tests', () => {
  test('renders the Loading UI component', () => {
    const snapshot = rendererWithProviders(<Loading />);
    expect(snapshot).toMatchSnapshot();
  });
});
