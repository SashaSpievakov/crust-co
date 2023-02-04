import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ItemCard from './ItemCard';
import { IPizzaItem } from '../../models/IPizzaItem';
import rendererWithAllProviders from '../../tests/helpers/rendererWithAllProviders';
import renderWithAllProviders from '../../tests/helpers/renderWithAllProviders';

const ItemCardProps: IPizzaItem = {
  id: '9',
  name: 'Vegetarian Pizza',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi aspernatur debitis quod suscipit, vitae placeat natus ipsum inventore esse rerum animi facere numquam saepe vero mollitia quibusdam at voluptates est commodi laudantium? Iste inventore quibusdam cupiditate nemo sint iusto minus nihil culpa! Sequi architecto nesciunt explicabo mollitia. Laboriosam, odio.',
  types: [0, 1],
  sizes: [12, 14, 16],
  price: 8,
  category: 3,
  rating: 15,
};

describe('ItemCard Test', () => {
  test('renders the ItemCard component', () => {
    const snapshot = rendererWithAllProviders(<ItemCard {...ItemCardProps} />);
    expect(snapshot).toMatchSnapshot();
  });

  describe('checks price changing', () => {
    beforeEach(() => {
      renderWithAllProviders(<ItemCard {...ItemCardProps} />);
    });

    test('checks type click', () => {
      const typeItem = screen.getByText(/thin/i);
      const price = screen.getByText(/8\$/i);

      userEvent.click(typeItem);
      expect(price).toHaveTextContent('9$');
    });

    test('checks size click', () => {
      const sizeItem = screen.getByText(/16 inch/i);
      const price = screen.getByText(/8\$/i);

      userEvent.click(sizeItem);
      expect(price).toHaveTextContent('12$');
    });

    test('checks type and size click', () => {
      const typeItem = screen.getByText(/thin/i);
      const sizeItem = screen.getByText(/14 inch/i);
      const price = screen.getByText(/8\$/i);

      userEvent.click(typeItem);
      userEvent.click(sizeItem);
      expect(price).toHaveTextContent('11$');
    });
  });

  // test('checks link redirect to the Item page', () => {
  //   renderWithAllProviders(<ItemCard {...ItemCardProps} />, true);
  //   const link = screen.getByRole('heading', {
  //     name: /vegetarian pizza/i,
  //   });

  //   userEvent.click(link);
  //   screen.debug();
  //   expect(
  //     screen.getByText(
  //       /Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi aspernatur debitis quod/i,
  //     ),
  //   ).toBeInTheDocument();
  // });
});
