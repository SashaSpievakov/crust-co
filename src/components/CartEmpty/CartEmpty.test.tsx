import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import CartEmpty from './CartEmpty';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import rendererWithProviders from '../../tests/helpers/rendererWithProviders';

describe('CartEmpty Test', () => {
  test('renders the CartEmpty component', () => {
    const snapshot = rendererWithProviders(<CartEmpty />);
    expect(snapshot).toMatchSnapshot();
  });

  test('checks link redirect to the Home page', async () => {
    renderWithProviders(null, true, '/cart');
    const link = screen.getByRole('link', {
      name: /go back/i,
    });

    userEvent.click(link);
    expect(screen.getByText(/all pizzas/i)).toBeInTheDocument();
  });
});
