import '@testing-library/jest-dom';

import Loading from './Loading';
import rendererWithAllProviders from '../../../tests/helpers/rendererWithProviders';

describe('Loading Tests', () => {
  test('renders the Loading UI component', () => {
    const snapshot = rendererWithAllProviders(<Loading />);
    expect(snapshot).toMatchSnapshot();
  });
});
