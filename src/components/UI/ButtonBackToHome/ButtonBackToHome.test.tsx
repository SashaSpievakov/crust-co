import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ButtonBackToHome from './ButtonBackToHome';
import renderWithProviders from '../../../tests/helpers/renderWithProviders';
import rendererWithProviders from '../../../tests/helpers/rendererWithProviders';

describe('ButtonBackToHome Tests', () => {
  test('renders the ButtonBackToHome UI component', () => {
    const snapshot = rendererWithProviders(<ButtonBackToHome />);
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
