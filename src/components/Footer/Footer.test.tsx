import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import Footer from './Footer';
import renderWithTheme from '../../tests/helpers/renderWithTheme';

describe('Cart Empty Test', () => {
  beforeEach(() => {
    renderWithTheme(<Footer />);
  });

  test('renders email link', () => {
    const link = screen.getByRole('link', {
      name: /spievakov@gmail\.com/i,
    });
    expect(link).toBeInTheDocument();
  });

  test('renders phone link', () => {
    const link = screen.getByRole('link', {
      name: /\+1 \(647\) 473-9502/i,
    });
    expect(link).toBeInTheDocument();
  });

  test('renders location link', () => {
    const link = screen.getByRole('link', {
      name: /88 alice st/i,
    });
    expect(link).toBeInTheDocument();
  });

  test('renders copyrights', () => {
    const copyright = screen.getByText(/© 2022 oleksandr spievakov/i);
    expect(copyright).toBeInTheDocument();
  });

  // test('renders snapshot', () => {
  //   const snapshot = renderer;
  // });
});
