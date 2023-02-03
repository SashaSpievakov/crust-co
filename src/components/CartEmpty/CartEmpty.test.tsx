import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import CartEmpty from './CartEmpty';
import rendererWithRouterAndTheme from '../../tests/helpers/rendererWithRouterAndTheme';
import renderWithAllProvidersAndAppRouter from '../../tests/helpers/renderWithAllProvidersAndAppRouter';

describe('Cart Empty Test', () => {
  test('renders the Cart Empty component', () => {
    const snapshot = rendererWithRouterAndTheme(<CartEmpty />);
    expect(snapshot).toMatchSnapshot();
  });

  test('checks link to the home page', () => {
    renderWithAllProvidersAndAppRouter(<CartEmpty />);
    const link = screen.getByRole('link', {
      name: /go back/i,
    });
    userEvent.click(link);
    expect(screen.getByText(/all pizzas/i)).toBeInTheDocument();
  });
});
