import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CartEmpty from './CartEmpty';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import rendererWithProviders from '../../tests/helpers/rendererWithProviders';

describe('CartEmpty Test', () => {
  test('renders the CartEmpty component', () => {
    const snapshot = rendererWithProviders(<CartEmpty />);
    expect(snapshot).toMatchSnapshot();
  });

  test('checks redirect to the Home page', () => {
    renderWithProviders(null, true, '/cart');
    const link = screen.getByRole('link', {
      name: /go back/i,
    });

    userEvent.click(link);
    expect(screen.getByText(/all pizzas/i)).toBeInTheDocument();
  });
});
