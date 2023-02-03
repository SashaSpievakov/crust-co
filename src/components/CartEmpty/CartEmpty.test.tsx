import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import CartEmpty from './CartEmpty';
import rendererWithRouterAndTheme from '../../tests/helpers/rendererWithRouterAndTheme';
import renderWithAllProvidersAndAppRouter from '../../tests/helpers/renderWithAllProvidersAndAppRouter';

describe('CartEmpty Test', () => {
  test('renders the CartEmpty component', () => {
    const snapshot = rendererWithRouterAndTheme(<CartEmpty />);
    expect(snapshot).toMatchSnapshot();
  });

  test('checks link redirect to the Home page', () => {
    renderWithAllProvidersAndAppRouter(<CartEmpty />);
    const link = screen.getByRole('link', {
      name: /go back/i,
    });

    userEvent.click(link);
    expect(screen.getByText(/all pizzas/i)).toBeInTheDocument();
  });
});
