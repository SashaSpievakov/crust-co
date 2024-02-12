import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import pizzasAPI from '../../services/PizzasService';
import { setupStore } from '../../store/store';
import rendererWithProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import server from '../../tests/mocks/api/server';
import SearchItems from './SearchItems';

describe('SearchItems Tests', () => {
  test('renders the SearchItems component', () => {
    const snapshot = rendererWithProviders(<SearchItems />);
    expect(snapshot).toMatchSnapshot();
  });

  describe('checks SearchItems functionality', () => {
    beforeEach(() => {
      renderWithProviders(<SearchItems />);
    });

    test('focuses on icon click', () => {
      const input = screen.getByRole('textbox');
      const searchIcon = screen.getByTestId('searchIcon');

      userEvent.click(searchIcon);

      expect(input).toHaveFocus();
    });

    test('types text into the input', () => {
      const input = screen.getByRole('textbox');

      userEvent.type(input, 'pizza');

      expect(input).toHaveDisplayValue('pizza');
    });

    test('shows delete text button', async () => {
      const input = screen.getByRole('textbox');

      userEvent.type(input, 'pizza');

      expect(await screen.findByTestId('cleanInput')).toBeInTheDocument();
    });

    test('deletes text on click', async () => {
      const input = screen.getByRole('textbox');

      userEvent.type(input, 'pizza');

      const deleteIcon = await screen.findByTestId('cleanInput');
      userEvent.click(deleteIcon);

      expect(input).toHaveDisplayValue('');
      expect(input).not.toHaveFocus();
    });
  });

  describe('checks rtk query and redux changes', () => {
    beforeAll(() => {
      server.listen();
    });

    afterAll(() => {
      server.close();
    });

    beforeEach(() => {
      renderWithProviders(null, true);
    });

    afterEach(() => {
      server.resetHandlers();
      setupStore().dispatch(pizzasAPI.util.resetApiState());
    });

    test('filters items on the Home page', async () => {
      const input = screen.getByRole('textbox');

      await userEvent.type(input, '  Diablo     ', { delay: 200 });

      const headings = screen.getAllByRole('heading', { level: 3 });
      expect(headings[0]).toHaveTextContent(/diablo/i);
    });
  });
});
