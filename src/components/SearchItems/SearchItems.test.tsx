import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchItems from './SearchItems';
import rendererWithAllProviders from '../../tests/helpers/rendererWithProviders';
import renderWithAllProviders from '../../tests/helpers/renderWithProviders';

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

      await waitFor(() => {
        expect(screen.getByTestId('cleanInput')).toBeInTheDocument();
      });
    });

    test('deletes text on click', async () => {
      const input = screen.getByRole('textbox');

      userEvent.type(input, 'pizza');

      await waitFor(() => {
        const deleteIcon = screen.getByTestId('cleanInput');
        userEvent.click(deleteIcon);
      });

      expect(input).toHaveDisplayValue('');
      expect(input).not.toHaveFocus();
    });
  });
});
