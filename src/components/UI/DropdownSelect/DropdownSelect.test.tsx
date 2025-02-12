import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { sortNamesArr } from '@src/pages/Home/HomePage';
import {
  rendererWithProviders,
  renderWithProvidersAndRoutes,
} from '@src/tests/helpers';

import { DropdownSelect } from './DropdownSelect';

describe('DropdownSelect Test', () => {
  test('should render the DropdownSelect component', () => {
    const snapshot = rendererWithProviders(
      <DropdownSelect
        sortNamesArr={sortNamesArr}
        chosenValue="rating"
        onSelect={() => null}
      />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  describe('DropdownSelect general functionality', () => {
    beforeEach(() => {
      renderWithProvidersAndRoutes(
        <DropdownSelect
          sortNamesArr={sortNamesArr}
          chosenValue="rating"
          onSelect={() => null}
        />,
      );
    });

    test('should open the dropdown select', () => {
      const arrow = screen.getByTestId('popupIcon');
      const list = screen.getByRole('list', { hidden: true });

      userEvent.click(arrow);

      expect(list).toBeVisible();
    });

    test('should close the dropdown select on icon click', () => {
      const arrow = screen.getByTestId('popupIcon');
      const list = screen.getByRole('list', { hidden: true });

      userEvent.click(arrow);
      userEvent.click(screen.getByTestId('popupIcon'));

      expect(list).not.toBeVisible();
    });

    test('should close the dropdown select on list item click', () => {
      const sortCaption = screen.getByText(/sort by/i);
      const list = screen.getByRole('list', { hidden: true });

      userEvent.click(sortCaption);
      userEvent.click(screen.getByText(/price/i));

      expect(list).not.toBeVisible();
    });
  });

  describe('DropdownSelect in an application environment', () => {
    test('should close popup on an outside click', () => {
      renderWithProvidersAndRoutes(null, true);
      const sortCaption = screen.getByText(/sort by/i);
      const bodyHeading = screen.getByRole('heading', { level: 2 });
      const list = screen.getByTestId('popupList');

      userEvent.click(sortCaption);
      userEvent.click(bodyHeading);

      expect(list).not.toBeVisible();
    });
  });
});
