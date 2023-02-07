import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import ProductsContainer from './ProductsContainer';
import rendererWithAllProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import { IPizzaItem } from '../../models/IPizzaItem';

const ProductsContainerItems: IPizzaItem[] = [
  {
    id: '12',
    name: 'Vegetarian Pizza',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi aspernatur debitis quod suscipit, ',
    types: [0, 1],
    sizes: [12, 14, 16],
    price: 12,
    category: 2,
    rating: 8,
  },
  {
    id: '9',
    name: 'Meat Pizza',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, iste.',
    types: [0],
    sizes: [12, 16],
    price: 14,
    category: 1,
    rating: 15,
  },
  {
    id: '2',
    name: 'Pepperoni Pizza',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, cum recusandae! Quidem, quaerat',
    types: [0],
    sizes: [12, 14],
    price: 10,
    category: 4,
    rating: 5,
  },
];

describe('ProductsContainer Test', () => {
  test('renders the ProductsContainer component', () => {
    const snapshot = rendererWithAllProviders(
      <ProductsContainer isLoading={false} items={ProductsContainerItems} />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  test('renders the ProductsContainer component skeletons', () => {
    renderWithProviders(
      <ProductsContainer isLoading items={ProductsContainerItems} />,
    );
    const skeletons = screen.getAllByRole('presentation');

    expect(skeletons[0]).toBeInTheDocument();
    expect(skeletons[8]).toBeInTheDocument();
  });

  test('renders components with a search value', () => {
    renderWithProviders(
      <ProductsContainer isLoading={false} items={ProductsContainerItems} />,
      false,
      '/',
      { searchValue: { value: '  Meat Pizza ' } },
    );
    const heading = screen.getByRole('heading');

    expect(heading).toHaveTextContent(/meat pizza/i);
  });
});
