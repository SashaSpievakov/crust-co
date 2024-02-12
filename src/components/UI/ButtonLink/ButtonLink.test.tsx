import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import rendererWithProviders from '../../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../../tests/helpers/renderWithProviders';
import { ButtonLink } from './ButtonLink';

describe('ButtonBackToHome Tests', () => {
  test('renders the ButtonBackToHome UI component', () => {
    const snapshot = rendererWithProviders(
      <ButtonLink link="/">Go Back</ButtonLink>,
    );
    expect(snapshot).toMatchSnapshot();
  });

  test('checks redirect to the Home page', () => {
    renderWithProviders(null, true, '/testing');
    const link = screen.getByRole('link', {
      name: /go back/i,
    });

    userEvent.click(link);
    expect(screen.getByText(/all pizzas/i)).toBeInTheDocument();
  });
});
