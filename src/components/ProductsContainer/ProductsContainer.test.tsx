import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import ProductsContainer from './ProductsContainer';
import rendererWithAllProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import { mockItems } from '../../tests/mocks/mockData/mockData';

describe('ProductsContainer Tests', () => {
  test('renders the ProductsContainer component', () => {
    const snapshot = rendererWithAllProviders(
      <ProductsContainer items={mockItems} />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  test('renders the ProductsContainer component with not matching search value', () => {
    const snapshot = rendererWithAllProviders(
      <ProductsContainer items={mockItems} />,
      '/',
      { searchValue: { value: 'testing value' } },
    );
    expect(snapshot).toMatchSnapshot();
  });

  test('renders items with a search value', () => {
    renderWithProviders(<ProductsContainer items={mockItems} />, false, '/', {
      searchValue: { value: '  Shrimp piZza   ' },
    });
    const heading = screen.getByRole('heading', { name: /shrimp pizza/i });

    expect(heading).toBeInTheDocument();
  });
});
