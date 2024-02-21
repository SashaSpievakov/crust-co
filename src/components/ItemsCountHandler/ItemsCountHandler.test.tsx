import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { IItemsCountHandler } from '../../models/IItemsCountHandler';
import {
  rendererWithProviders,
  renderWithProvidersAndRoutes,
} from '../../tests/helpers';
import { CartItemsMockProps } from '../../tests/mocks/mockData/mockData';
import { typeNames } from '../FullItemBlock/FullItemBlock';
import ItemsCountHandler from './ItemsCountHandler';

const ItemsCountHandlerMockProps: IItemsCountHandler = {
  id: '6',
  name: 'Cheesburger Pizza',
  price: 7,
  activeSize: 1,
  activeType: 1,
  typeNames,
  isFullScreen: false,
};

describe('ItemsCountHandler Tests', () => {
  test('renders the ItemsCountHandler UI component', () => {
    const snapshot = rendererWithProviders(
      <ItemsCountHandler {...ItemsCountHandlerMockProps} />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  test('renders the ItemsCountHandler component with items', () => {
    const snapshot = rendererWithProviders(
      <ItemsCountHandler {...ItemsCountHandlerMockProps} />,
      '/',
      { cart: CartItemsMockProps },
    );
    expect(snapshot).toMatchSnapshot();
  });

  describe('checks buttons clicks', () => {
    test('clicks add button', async () => {
      renderWithProvidersAndRoutes(
        <ItemsCountHandler {...ItemsCountHandlerMockProps} />,
      );
      const addButton = screen.getByRole('button');

      userEvent.click(addButton);

      expect(await screen.findByText(/1/i)).toBeInTheDocument();
    });

    test('clicks minus button', async () => {
      renderWithProvidersAndRoutes(
        <ItemsCountHandler {...ItemsCountHandlerMockProps} />,
      );
      const addButton = screen.getByRole('button');
      userEvent.click(addButton);

      const minusButton = await screen.findByTestId('itemsHandlerMinus');
      userEvent.click(minusButton);

      expect(screen.getByText(/add/i)).toBeInTheDocument();
    });

    test('clicks plus button', async () => {
      renderWithProvidersAndRoutes(
        <ItemsCountHandler {...ItemsCountHandlerMockProps} />,
      );
      const addButton = screen.getByRole('button');
      userEvent.click(addButton);

      const plusButton = await screen.findByTestId('itemsHandlerPlus');
      userEvent.click(plusButton);
      userEvent.click(plusButton);
      userEvent.click(plusButton);
      userEvent.click(plusButton);

      expect(screen.getByText(/5/i)).toBeInTheDocument();
    });
  });
});
