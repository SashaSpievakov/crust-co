import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Sort from './Sort';
import rendererWithProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';

describe('Sort Test', () => {
  test('renders the Sort component', () => {
    const snapshot = rendererWithProviders(
      <Sort sortNamesArr={['rating', 'price', 'A to Z']} />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  describe('tests general functionality', () => {
    beforeEach(() => {
      renderWithProviders(
        <Sort sortNamesArr={['rating', 'price', 'A to Z']} />,
      );
    });

    test('changes sort state in redux', () => {
      const arrow = screen.getByTestId('popupIcon');
      const chosenSornName = screen.getByTestId('currenChosenSortName');

      userEvent.click(arrow);
      userEvent.click(screen.getByText(/a to z/i));

      expect(chosenSornName).toHaveTextContent(/a to z/i);
    });

    test('opens the popup', () => {
      const arrow = screen.getByTestId('popupIcon');
      const list = screen.getByRole('list', { hidden: true });

      userEvent.click(arrow);

      expect(list).toBeVisible();
    });

    test('closes the popup on icon click', () => {
      const arrow = screen.getByTestId('popupIcon');
      const list = screen.getByRole('list', { hidden: true });

      userEvent.click(arrow);
      userEvent.click(screen.getByTestId('popupIcon'));

      expect(list).not.toBeVisible();
    });

    test('closes the popup on list item click', () => {
      const sortCaption = screen.getByText(/sort by/i);
      const list = screen.getByRole('list', { hidden: true });

      userEvent.click(sortCaption);
      userEvent.click(screen.getByText(/price/i));

      expect(list).not.toBeVisible();
    });
  });

  describe('test integration with the whole appliation', () => {
    test('closes popup on body click', () => {
      renderWithProviders(null, true);
      const sortCaption = screen.getByText(/sort by/i);
      const bodyHeading = screen.getByRole('heading', { level: 2 });
      const list = screen.getByTestId('popupList');

      userEvent.click(sortCaption);
      userEvent.click(bodyHeading);

      expect(list).not.toBeVisible();
    });
  });
});
