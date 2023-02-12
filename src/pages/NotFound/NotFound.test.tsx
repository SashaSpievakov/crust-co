import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NotFound from './NotFound';
import rendererWithProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';

describe('NotFound Tests', () => {
  test('renders the NotFound page', () => {
    const snapshot = rendererWithProviders(<NotFound />);
    expect(snapshot).toMatchSnapshot();
  });

  test('checks redirect to the Home page', () => {
    renderWithProviders(null, true, '/notfound');
    const link = screen.getByRole('link', {
      name: /go back/i,
    });

    userEvent.click(link);

    expect(screen.getByText(/all pizzas/i)).toBeInTheDocument();
  });
});
