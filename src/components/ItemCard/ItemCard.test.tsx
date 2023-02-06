import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';

import ItemCard from './ItemCard';
import rendererWithAllProviders from '../../tests/helpers/rendererWithProviders';
import renderWithAllProviders from '../../tests/helpers/renderWithProviders';
import { IPizzaItem } from '../../models/IPizzaItem';
import { setupStore } from '../../store/store';
import server from '../../tests/mocks/api/server';
import itemAPI from '../../services/ItemService';

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

  describe('checks the price changing', () => {
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

  describe('checks rtk query hook', () => {
    beforeAll(() => {
      server.listen();
    });

    afterEach(() => {
      server.resetHandlers();
      setupStore().dispatch(itemAPI.util.resetApiState());
    });

    afterAll(() => {
      server.close();
    });

    test('checks link redirect to the Item page', async () => {
      server.use(
        rest.get('*', (req, res, ctx) => {
          return res(ctx.json(ItemCardProps));
        }),
      );

      window.HTMLElement.prototype.scrollIntoView = function () {}; // eslint-disable-line func-names
      renderWithAllProviders(<ItemCard {...ItemCardProps} />, true, '/cart');
      const link = screen.getByRole('heading', {
        name: /vegetarian pizza/i,
      });

      userEvent.click(link);

      await waitFor(() => {
        expect(
          screen.getByText(
            /Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi aspernatur debitis quod/i,
          ),
        ).toBeInTheDocument();
      });
    });
  });
});
