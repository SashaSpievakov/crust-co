import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  rendererWithProviders,
  renderWithProvidersAndRoutes,
} from '../../../tests/helpers';
import { ButtonLink } from './ButtonLink';

describe('ButtonBackToHome Tests', () => {
  test('renders the ButtonBackToHome UI component', () => {
    const snapshot = rendererWithProviders(
      <ButtonLink link="/">Go Back</ButtonLink>,
    );
    expect(snapshot).toMatchSnapshot();
  });

  test('checks redirect to the Home page', () => {
    renderWithProvidersAndRoutes(null, true, '/testing');
    const link = screen.getByRole('link', {
      name: /go back/i,
    });

    userEvent.click(link);
    expect(screen.getByText(/all pizzas/i)).toBeInTheDocument();
  });
});
