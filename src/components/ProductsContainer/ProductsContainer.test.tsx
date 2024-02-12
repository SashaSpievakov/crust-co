import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';

import rendererWithAllProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import { mockItems } from '../../tests/mocks/mockData/mockData';
import ProductsContainer from './ProductsContainer';

describe('ProductsContainer Tests', () => {
  test('renders the ProductsContainer component', () => {
    const snapshot = rendererWithAllProviders(
      <ProductsContainer isLoading={false} items={mockItems} />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  test('renders the ProductsContainer component with not matching search value', () => {
    const snapshot = rendererWithAllProviders(
      <ProductsContainer isLoading={false} items={mockItems} />,
      '/',
      { searchValue: { value: 'testing value' } },
    );
    expect(snapshot).toMatchSnapshot();
  });

  test('renders the ProductsContainer component skeletons', () => {
    renderWithProviders(<ProductsContainer isLoading items={mockItems} />);
    const skeletons = screen.getAllByRole('presentation');

    expect(skeletons[0]).toBeInTheDocument();
    expect(skeletons[8]).toBeInTheDocument();
  });

  test('renders items with a search value', () => {
    renderWithProviders(
      <ProductsContainer isLoading={false} items={mockItems} />,
      false,
      '/',
      { searchValue: { value: '  Shrimp piZza   ' } },
    );
    const heading = screen.getByRole('heading', { name: /shrimp pizza/i });

    expect(heading).toBeInTheDocument();
  });
});
