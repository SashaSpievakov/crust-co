import '@testing-library/jest-dom';

import MainLayout from './MainLayout';
import rendererWithProviders from '../tests/helpers/rendererWithProviders';

describe('MainLayout Tests', () => {
  test('renders the MainLayout component', () => {
    const snapshot = rendererWithProviders(<MainLayout />);
    expect(snapshot).toMatchSnapshot();
  });
});
