import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ItemCard from './ItemCard';
import rendererWithProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import { mockItem } from '../../tests/mocks/api/mockData';
import { setupStore } from '../../store/store';
import server from '../../tests/mocks/api/server';
import itemAPI from '../../services/ItemService';

describe('ItemCard Tests', () => {
  test('renders the ItemCard component', () => {
    const snapshot = rendererWithProviders(<ItemCard {...mockItem} />);
    expect(snapshot).toMatchSnapshot();
  });

  describe('checks the price changing', () => {
    beforeEach(() => {
      renderWithProviders(<ItemCard {...mockItem} />);
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
      renderWithProviders(<ItemCard {...mockItem} />, true, '/cart');
      const link = screen.getByRole('heading', {
        name: /vegetarian pizza/i,
      });

      userEvent.click(link);

      expect(
        await screen.findByText(
          /Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi aspernatur debitis quod/i,
        ),
      ).toBeInTheDocument();
    });
  });
});
