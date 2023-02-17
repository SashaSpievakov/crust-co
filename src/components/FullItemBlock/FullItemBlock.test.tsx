import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FullItemBlock from './FullItemBlock';
import rendererWithProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import { mockItem } from '../../tests/mocks/mockData/mockData';

describe('FullItemBlock Tests', () => {
  test('renders the FullItemBlock component', () => {
    const snapshot = rendererWithProviders(<FullItemBlock item={mockItem} />);
    expect(snapshot).toMatchSnapshot();
  });

  describe('checks the price changing', () => {
    beforeEach(() => {
      renderWithProviders(<FullItemBlock item={mockItem} />);
    });

    test('checks type click', () => {
      const typeItem = screen.getByText(/thin/i);
      const price = screen.getByRole('heading', {
        level: 3,
      });

      userEvent.click(typeItem);

      expect(price).toHaveTextContent('15$');
    });

    test('checks size click', () => {
      const sizeItem = screen.getByText(/16 inch/i);
      const price = screen.getByRole('heading', {
        level: 3,
      });

      userEvent.click(sizeItem);

      expect(price).toHaveTextContent('18$');
    });

    test('checks type and size click', () => {
      const typeItem = screen.getByText(/thin/i);
      const sizeItem = screen.getByText(/14 inch/i);
      const price = screen.getByRole('heading', {
        level: 3,
      });

      userEvent.click(typeItem);
      userEvent.click(sizeItem);

      expect(price).toHaveTextContent('17$');
    });
  });

  describe('checks the integration between CoundHandler, Selector and FullItem', () => {
    beforeEach(() => {
      renderWithProviders(<FullItemBlock item={mockItem} />);
    });

    test('checks disabled minus button after type switching', () => {
      const sizeItem = screen.getByText(/16 inch/i);
      const buttonAdd = screen.getByText(/add/i);
      userEvent.click(buttonAdd);

      const buttonPlus = screen.getByTestId('itemsHandlerPlus');
      const buttonMinus = screen.getByTestId('itemsHandlerMinus');
      const count = screen.getByText('1');

      userEvent.click(buttonPlus);
      userEvent.click(buttonPlus);

      userEvent.click(sizeItem);
      userEvent.click(buttonPlus);
      userEvent.click(buttonMinus);
      userEvent.click(buttonMinus);

      expect(count).toHaveTextContent('3');
    });

    test('goes back to add button after multiple changes in the count', () => {
      const typeTraditional = screen.getByText(/traditional/i);
      const typeThin = screen.getByText(/thin/i);
      const twelve = screen.getByText(/12 inch/i);
      const fourteen = screen.getByText(/14 inch/i);
      const sixteen = screen.getByText(/16 inch/i);
      const buttonAdd = screen.getByText(/add/i);
      userEvent.click(buttonAdd);

      const buttonPlus = screen.getByTestId('itemsHandlerPlus');
      const buttonMinus = screen.getByTestId('itemsHandlerMinus');

      userEvent.click(buttonPlus);

      userEvent.click(typeThin);
      userEvent.click(fourteen);
      userEvent.click(buttonPlus);
      userEvent.click(buttonPlus);

      userEvent.click(sixteen);
      userEvent.click(buttonPlus);

      userEvent.click(fourteen);
      userEvent.click(buttonMinus);
      userEvent.click(buttonMinus);
      userEvent.click(buttonMinus);

      userEvent.click(sixteen);
      userEvent.click(buttonMinus);

      userEvent.click(twelve);
      userEvent.click(typeTraditional);
      userEvent.click(buttonMinus);
      userEvent.click(buttonMinus);

      expect(screen.getByText(/add/i)).toBeInTheDocument();
    });
  });
});
