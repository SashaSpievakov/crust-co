import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  rendererWithProviders,
  renderWithProvidersAndRoutes,
} from '../../../../tests/helpers';
import { Categories } from './Categories';

describe('Categories Tests', () => {
  const mockOnSelect = jest.fn();

  test('should render the Categories component', () => {
    const snapshot = rendererWithProviders(
      <Categories activeCategory={0} onSelect={() => null} />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  test('should have the correct active category', () => {
    renderWithProvidersAndRoutes(
      <Categories activeCategory={2} onSelect={() => null} />,
    );
    const activeCategory = screen.getByRole('listitem', {
      current: true,
    });

    expect(activeCategory).toHaveTextContent(/vegetarian/i);
  });

  test('should select a category on click', async () => {
    renderWithProvidersAndRoutes(
      <Categories activeCategory={0} onSelect={mockOnSelect} />,
    );
    const categories = screen.getAllByRole('listitem');

    userEvent.click(categories[2]);

    expect(mockOnSelect).toHaveBeenCalledWith(2);
  });

  test('should select a category on Enter key press', async () => {
    renderWithProvidersAndRoutes(
      <Categories activeCategory={1} onSelect={mockOnSelect} />,
    );

    userEvent.tab();
    userEvent.keyboard('{Enter}');

    expect(mockOnSelect).toHaveBeenCalledWith(0);
  });
});
