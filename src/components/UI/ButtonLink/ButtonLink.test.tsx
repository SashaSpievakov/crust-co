import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  rendererWithProviders,
  renderWithProvidersAndRoutes,
} from '@src/tests/helpers';

import { ButtonLink } from './ButtonLink';

describe('ButtonLink tests', () => {
  test('should render the ButtonLink UI component', () => {
    const snapshot = rendererWithProviders(
      <ButtonLink link="/">Go Back</ButtonLink>,
    );
    expect(snapshot).toMatchSnapshot();
  });

  test('should redirect to the Home page', () => {
    renderWithProvidersAndRoutes(null, true, '/testing');
    const link = screen.getByRole('link', {
      name: /return home/i,
    });

    userEvent.click(link);
    expect(screen.getByText(/all pizzas/i)).toBeInTheDocument();
  });
});
