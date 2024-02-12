import '@testing-library/jest-dom';

import rendererWithAllProviders from '../../../tests/helpers/rendererWithProviders';
import Loading from './Loading';

describe('Loading Tests', () => {
  test('renders the Loading UI component', () => {
    const snapshot = rendererWithAllProviders(<Loading />);
    expect(snapshot).toMatchSnapshot();
  });
});
