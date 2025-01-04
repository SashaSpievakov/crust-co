import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  rendererWithProviders,
  renderWithProvidersAndRoutes,
} from 'src/tests/helpers';

import { LogoSection } from './LogoSection';

describe('LogoSection tests', () => {
  test('should render the LogoSection component', () => {
    const snapshot = rendererWithProviders(<LogoSection />);
    expect(snapshot).toMatchSnapshot();
  });

  test('should redirect to the Home page', () => {
    renderWithProvidersAndRoutes(<LogoSection />, true, '/cart');
    const mainHeader = screen.getByRole('heading', {
      level: 1,
    });

    userEvent.click(mainHeader);

    const allPizzasHeader = screen.getByRole('heading', {
      level: 2,
    });
    expect(allPizzasHeader).toHaveTextContent(/all pizzas/i);
  });
});
