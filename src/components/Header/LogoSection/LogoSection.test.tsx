import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  rendererWithProviders,
  renderWithProvidersAndRoutes,
} from '../../../tests/helpers';
import { LogoSection } from './LogoSection';

describe('LogoSection Tests', () => {
  test('renders the LogoSection UI component', () => {
    const snapshot = rendererWithProviders(<LogoSection />);
    expect(snapshot).toMatchSnapshot();
  });

  test('checks link redirect to the Home page', () => {
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
