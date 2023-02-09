import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ItemsCountHandler from './ItemsCountHandler';
import rendererWithAllProviders from '../../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../../tests/helpers/renderWithProviders';
import { typeNames } from '../../FullItemBlock/FullItemBlock';
import { CartItemsMockProps } from '../../../tests/mocks/api/mockData';
import { IItemsCountHandler } from '../../../models/IItemsCountHandler';

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
  test('renders the ItemsCountHandler component', () => {
    const snapshot = rendererWithAllProviders(
      <ItemsCountHandler {...ItemsCountHandlerMockProps} />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  test('renders the ItemsCountHandler component with items', () => {
    const snapshot = rendererWithAllProviders(
      <ItemsCountHandler {...ItemsCountHandlerMockProps} />,
      '/',
      { cart: CartItemsMockProps },
    );
    expect(snapshot).toMatchSnapshot();
  });

  describe('checks buttons clicks', () => {
    test('clicks add button', async () => {
      renderWithProviders(
        <ItemsCountHandler {...ItemsCountHandlerMockProps} />,
      );
      const addButton = screen.getByRole('button');

      userEvent.click(addButton);

      expect(await screen.findByText(/1/i)).toBeInTheDocument();
    });

    test('clicks minus button', async () => {
      renderWithProviders(
        <ItemsCountHandler {...ItemsCountHandlerMockProps} />,
      );
      const addButton = screen.getByRole('button');
      userEvent.click(addButton);

      const minusButton = await screen.findByTestId('itemsHandlerMinus');
      userEvent.click(minusButton);

      expect(screen.getByText(/add/i)).toBeInTheDocument();
    });

    test('clicks plus button', async () => {
      renderWithProviders(
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
