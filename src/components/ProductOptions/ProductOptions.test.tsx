import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { typeNames } from '../../pages/Pizza/FullProduct/FullProduct';
import { pizzaAPI } from '../../services';
import { setupStore } from '../../store';
import {
  rendererWithProviders,
  renderWithProvidersAndRoutes,
} from '../../tests/helpers';
import { testServer } from '../../tests/mocks';
import { ProductOptions } from './ProductOptions';
import { IProductOptions } from './ProductOptions.type';

const ProductOptionsMockProps: IProductOptions = {
  price: 10,
  sizes: [12, 14, 16],
  types: [0, 1],
  activeSize: 0,
  activeType: 0,
  setActivePrice: jest.fn(),
  setActiveSize: jest.fn(),
  setActiveType: jest.fn(),
  typeNames,
  isFullScreen: true,
};

describe('ProductOptions tests', () => {
  test('should render the ProductOptions UI component', () => {
    const snapshot = rendererWithProviders(
      <ProductOptions {...ProductOptionsMockProps} />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  describe('ProductOptions select logic', () => {
    beforeAll(() => {
      testServer.listen();
    });

    afterAll(() => {
      testServer.close();
    });

    beforeEach(() => {
      renderWithProvidersAndRoutes(null, true, '/pizzas/Chicken%20Curry');
    });

    afterEach(() => {
      testServer.resetHandlers();
      setupStore().dispatch(pizzaAPI.util.resetApiState());
    });

    test('should check thin type selection', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const typeThin = screen.getByText(/thin/i);

      userEvent.click(typeThin);

      expect(price).toHaveTextContent(/15\$/i);
    });

    test('should change back to traditional type', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const typeTraditional = screen.getByText(/traditional/i);
      const typeThin = screen.getByText(/thin/i);

      userEvent.click(typeThin);
      userEvent.click(typeTraditional);

      expect(price).toHaveTextContent(/14\$/i);
    });

    test('should check double thin type selection', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const typeThin = screen.getByText(/thin/i);

      userEvent.click(typeThin);
      userEvent.click(typeThin);

      expect(price).toHaveTextContent(/15\$/i);
    });

    test('should change from 12 inch to 14 inch', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const fourteen = screen.getByText(/14 inch/i);

      userEvent.click(fourteen);

      expect(price).toHaveTextContent(/16\$/i);
    });

    test('should change from 12 inch to 16 inch', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const sixteen = screen.getByText(/16 inch/i);

      userEvent.click(sixteen);

      expect(price).toHaveTextContent(/18\$/i);
    });

    test('should change from 14 inch to 16 inch', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const fourteen = screen.getByText(/14 inch/i);
      const sixteen = screen.getByText(/16 inch/i);

      userEvent.click(fourteen);
      expect(price).toHaveTextContent(/16\$/i);

      userEvent.click(sixteen);
      expect(price).toHaveTextContent(/18\$/i);
    });

    test('should change from 14 inch to 12 inch', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const fourteen = screen.getByText(/14 inch/i);
      const twelve = screen.getByText(/12 inch/i);

      userEvent.click(fourteen);
      expect(price).toHaveTextContent(/16\$/i);

      userEvent.click(twelve);
      expect(price).toHaveTextContent(/14\$/i);
    });

    test('should change from 16 inch to 14 inch', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const fourteen = screen.getByText(/14 inch/i);
      const sixteen = screen.getByText(/16 inch/i);

      userEvent.click(sixteen);
      expect(price).toHaveTextContent(/18\$/i);

      userEvent.click(fourteen);
      expect(price).toHaveTextContent(/16\$/i);
    });

    test('should change from 16 inch to 12 inch', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const twelve = screen.getByText(/12 inch/i);
      const sixteen = screen.getByText(/16 inch/i);

      userEvent.click(sixteen);
      expect(price).toHaveTextContent(/18\$/i);

      userEvent.click(twelve);
      expect(price).toHaveTextContent(/14\$/i);
    });

    test('should select thin type and 16 inch together', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const typeThin = screen.getByText(/thin/i);
      const sixteen = screen.getByText(/16 inch/i);

      userEvent.click(sixteen);
      userEvent.click(typeThin);

      expect(price).toHaveTextContent(/19\$/i);
    });

    test('should check triple and double click on 14 inch', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const fourteen = screen.getByText(/14 inch/i);

      userEvent.click(fourteen);
      userEvent.click(fourteen);
      expect(price).toHaveTextContent(/16\$/i);

      userEvent.click(fourteen);
      expect(price).toHaveTextContent(/16\$/i);
    });

    test('should check all clicks combined', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const traditionalType = screen.getByText(/traditional/i);
      const thinType = screen.getByText(/thin/i);
      const twelve = screen.getByText(/12 inch/i);
      const fourteen = screen.getByText(/14 inch/i);
      const sixteen = screen.getByText(/16 inch/i);

      userEvent.click(sixteen);
      userEvent.click(traditionalType);
      userEvent.click(fourteen);
      userEvent.click(twelve);
      userEvent.click(thinType);
      userEvent.click(fourteen);
      userEvent.click(traditionalType);
      userEvent.click(sixteen);
      userEvent.click(twelve);
      userEvent.click(thinType);

      expect(price).toHaveTextContent(/15\$/i);
    });
  });
});
