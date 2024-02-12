import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import rendererWithProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import Categories from './Categories';

describe('Categories Tests', () => {
  test('renders the Categories component', () => {
    const snapshot = rendererWithProviders(<Categories />);
    expect(snapshot).toMatchSnapshot();
  });

  test('selects a correct category', () => {
    renderWithProviders(<Categories />);
    const categories = screen.getAllByRole('listitem', { current: false });

    userEvent.click(categories[0]);

    expect(screen.getByRole('listitem', { current: true })).toHaveTextContent(
      /meat/i,
    );
  });
});
