import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';

import {
  rendererWithProviders,
  renderWithProvidersAndRoutes,
} from '../../tests/helpers';
import { mockItems } from '../../tests/mocks/mockData/mockData';
import ProductsContainer from './ProductsContainer';

describe('ProductsContainer Tests', () => {
  test('renders the ProductsContainer component', () => {
    const snapshot = rendererWithProviders(
      <ProductsContainer isLoading={false} items={mockItems} searchValue="" />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  test('renders the ProductsContainer component with not matching search value', () => {
    const snapshot = rendererWithProviders(
      <ProductsContainer
        isLoading={false}
        items={mockItems}
        searchValue="testing value"
      />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  test('renders the ProductsContainer component skeletons', () => {
    renderWithProvidersAndRoutes(
      <ProductsContainer isLoading items={mockItems} searchValue="" />,
    );
    const skeletons = screen.getAllByRole('presentation');

    expect(skeletons[0]).toBeInTheDocument();
    expect(skeletons[8]).toBeInTheDocument();
  });

  test('renders items with a search value', () => {
    renderWithProvidersAndRoutes(
      <ProductsContainer
        isLoading={false}
        items={mockItems}
        searchValue="  Shrimp piZza   "
      />,
    );
    const heading = screen.getByRole('heading', { name: /shrimp pizza/i });

    expect(heading).toBeInTheDocument();
  });
});
