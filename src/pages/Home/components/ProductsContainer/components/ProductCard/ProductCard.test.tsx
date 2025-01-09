import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { pizzaAPI } from '../../../../../../services';
import { setupStore } from '../../../../../../store';
import {
  rendererWithProviders,
  renderWithProvidersAndRoutes,
} from '../../../../../../tests/helpers';
import { mockItem, testServer } from '../../../../../../tests/mocks';
import { ProductCard } from './ProductCard';

describe('ProductCard tests', () => {
  test('should render the ProductCard component', () => {
    const snapshot = rendererWithProviders(<ProductCard {...mockItem} />);
    expect(snapshot).toMatchSnapshot();
  });

  describe('ProductCard price changing', () => {
    beforeEach(() => {
      renderWithProvidersAndRoutes(<ProductCard {...mockItem} />);
    });

    test('should click correct type', () => {
      const typeItem = screen.getByText(/thin/i);
      const price = screen.getByText(/14\$/i);

      userEvent.click(typeItem);

      expect(price).toHaveTextContent('15$');
    });

    test('should click correct size', () => {
      const sizeItem = screen.getByText(/16 inch/i);
      const price = screen.getByText(/14\$/i);

      userEvent.click(sizeItem);

      expect(price).toHaveTextContent('18$');
    });

    test('should choose both correct type and size', () => {
      const typeItem = screen.getByText(/thin/i);
      const sizeItem = screen.getByText(/14 inch/i);
      const price = screen.getByText(/14\$/i);

      userEvent.click(typeItem);
      userEvent.click(sizeItem);

      expect(price).toHaveTextContent('17$');
    });
  });

  describe('ProductCard redirects and requests', () => {
    beforeAll(() => {
      testServer.listen();
    });

    afterAll(() => {
      testServer.close();
    });

    afterEach(() => {
      testServer.resetHandlers();
      setupStore().dispatch(pizzaAPI.util.resetApiState());
    });

    test('should redirect to the product page', async () => {
      renderWithProvidersAndRoutes(
        <ProductCard {...mockItem} />,
        true,
        '/cart',
      );
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
