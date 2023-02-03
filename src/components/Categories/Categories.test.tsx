import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import Categories from './Categories';
import rendererWithStoreAndThemeProvider from '../../tests/helpers/rendererWithStoreAndTheme';
import renderWithStoreAndThemeProvider from '../../tests/helpers/renderWithStoreAndTheme';

describe('Categories Test', () => {
  test('renders the Categories component', () => {
    const snapshot = rendererWithStoreAndThemeProvider(<Categories />);
    expect(snapshot).toMatchSnapshot();
  });

  test('renders a correct chosen item', () => {
    renderWithStoreAndThemeProvider(<Categories />);

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
