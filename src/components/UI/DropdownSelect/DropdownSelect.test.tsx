import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { sortNamesArr } from '../../../pages/Home/Home';
import rendererWithProviders from '../../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../../tests/helpers/renderWithProviders';
import { DropdownSelect } from './DropdownSelect';

describe('Sort Test', () => {
  test('renders the Sort component', () => {
    const snapshot = rendererWithProviders(
      <DropdownSelect
        sortNamesArr={sortNamesArr}
        chosenValue="rating"
        onSelect={() => null}
      />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  describe('tests general functionality', () => {
    beforeEach(() => {
      renderWithProviders(
        <DropdownSelect
          sortNamesArr={sortNamesArr}
          chosenValue="rating"
          onSelect={() => null}
        />,
      );
    });

    // test('chooses a new value', () => {
    //   const arrow = screen.getByTestId('popupIcon');
    //   const chosenSornName = screen.getByTestId('currenChosenSortName');

    //   userEvent.click(arrow);
    //   userEvent.click(screen.getByText(/a to z/i));

    //   expect(chosenSornName).toHaveTextContent(/a to z/i);
    // });

    test('opens the dropdown select', () => {
      const arrow = screen.getByTestId('popupIcon');
      const list = screen.getByRole('list', { hidden: true });

      userEvent.click(arrow);

      expect(list).toBeVisible();
    });

    test('closes the dropdown select on icon click', () => {
      const arrow = screen.getByTestId('popupIcon');
      const list = screen.getByRole('list', { hidden: true });

      userEvent.click(arrow);
      userEvent.click(screen.getByTestId('popupIcon'));

      expect(list).not.toBeVisible();
    });

    test('closes the dropdown select on list item click', () => {
      const sortCaption = screen.getByText(/sort by/i);
      const list = screen.getByRole('list', { hidden: true });

      userEvent.click(sortCaption);
      userEvent.click(screen.getByText(/price/i));

      expect(list).not.toBeVisible();
    });
  });

  describe('tests in an application environment', () => {
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
