import '@testing-library/jest-dom';

import { rendererWithProviders } from '../../../tests/helpers';
import { Loading } from './Loading';

describe('Loading tests', () => {
  test('should render the Loading UI component', () => {
    const snapshot = rendererWithProviders(<Loading />);
    expect(snapshot).toMatchSnapshot();
  });
});
