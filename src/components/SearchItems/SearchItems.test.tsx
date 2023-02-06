import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchItems from './SearchItems';
import rendererWithAllProviders from '../../tests/helpers/rendererWithProviders';
import renderWithAllProviders from '../../tests/helpers/renderWithProviders';
import { setupStore } from '../../store/store';
import server from '../../tests/mocks/api/server';
import pizzasAPI from '../../services/PizzasService';

describe('SearchItems Test', () => {
  test('renders the SearchItems component', () => {
    const snapshot = rendererWithAllProviders(<SearchItems />);
    expect(snapshot).toMatchSnapshot();
  });

  describe('checks SearchItems functionality', () => {
    beforeEach(() => {
      renderWithAllProviders(<SearchItems />);
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

    afterEach(() => {
      server.resetHandlers();
      setupStore().dispatch(pizzasAPI.util.resetApiState());
    });

    afterAll(() => {
      server.close();
    });

    test('filters items on the Home page', async () => {
      renderWithAllProviders(null, true);
      const input = screen.getByRole('textbox');

      userEvent.type(input, 'pepperoni');

      expect(
        await screen.findByRole('heading', { level: 3 }),
      ).toHaveTextContent(/pepperoni pizza/i);
    });
  });
});
