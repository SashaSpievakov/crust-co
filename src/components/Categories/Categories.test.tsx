import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import Categories from './Categories';
import renderWithStoreAndThemeProvider from '../../tests/helpers/renderWithStoreAndThemeProvider';

describe('Cart Empty Test', () => {
  beforeEach(() => {
    renderWithStoreAndThemeProvider(<Categories />);
  });

  test('renders categories list', () => {
    const categories = screen.getAllByRole('listitem');
    expect(categories[0]).toBeInTheDocument();
    expect(categories[2]).toBeInTheDocument();
    expect(categories[4]).toBeInTheDocument();
    expect(categories[5]).toBeUndefined();
  });

  test('renders a correct chosen item', () => {
    expect(screen.getByRole('listitem', { current: true })).toHaveTextContent(
      /all/i,
    );

    const itemsRest = screen.getAllByRole('listitem', { current: false });
    userEvent.click(itemsRest[0]);

    expect(screen.getByRole('listitem', { current: true })).toHaveTextContent(
      /meat/i,
    );
  });
});
