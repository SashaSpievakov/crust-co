import '@testing-library/jest-dom';

import { rendererWithProviders } from '../../tests/helpers';
import { MainLayout } from './MainLayout';

describe('MainLayout tests', () => {
  test('should render the MainLayout component', () => {
    const snapshot = rendererWithProviders(<MainLayout />);
    expect(snapshot).toMatchSnapshot();
  });
});
