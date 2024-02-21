import '@testing-library/jest-dom';

import { rendererWithProviders } from '../../tests/helpers';
import { MainLayout } from './MainLayout';

describe('MainLayout Tests', () => {
  test('renders the MainLayout component', () => {
    const snapshot = rendererWithProviders(<MainLayout />);
    expect(snapshot).toMatchSnapshot();
  });
});
