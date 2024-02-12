import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import itemAPI from '../../services/ItemService';
import { setupStore } from '../../store/store';
import rendererWithProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import server from '../../tests/mocks/api/server';
import { mockItem } from '../../tests/mocks/mockData/mockData';
import ItemCard from './ItemCard';

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
      const price = screen.getByText(/14\$/i);

      userEvent.click(typeItem);

      expect(price).toHaveTextContent('15$');
    });

    test('checks size click', () => {
      const sizeItem = screen.getByText(/16 inch/i);
      const price = screen.getByText(/14\$/i);

      userEvent.click(sizeItem);

      expect(price).toHaveTextContent('18$');
    });

    test('checks type and size click', () => {
      const typeItem = screen.getByText(/thin/i);
      const sizeItem = screen.getByText(/14 inch/i);
      const price = screen.getByText(/14\$/i);

      userEvent.click(typeItem);
      userEvent.click(sizeItem);

      expect(price).toHaveTextContent('17$');
    });
  });

  describe('checks rtk query hook', () => {
    beforeAll(() => {
      server.listen();
    });

    afterAll(() => {
      server.close();
    });

    afterEach(() => {
      server.resetHandlers();
      setupStore().dispatch(itemAPI.util.resetApiState());
    });

    test('checks link redirect to the Item page', async () => {
      renderWithProviders(<ItemCard {...mockItem} />, true, '/cart');
      const link = screen.getByRole('heading', {
        name: /chicken curry/i,
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
