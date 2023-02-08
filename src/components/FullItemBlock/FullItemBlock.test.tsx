import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FullItemBlock from './FullItemBlock';
import rendererWithProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import { mockItem } from '../../tests/mocks/api/mockData';

describe('FullItemBlock Tests', () => {
  test('renders the FullItemBlock component', () => {
    const snapshot = rendererWithProviders(<FullItemBlock item={mockItem} />);
    expect(snapshot).toMatchSnapshot();
  });

  test('checks link redirect to the Home page', () => {
    renderWithProviders(<FullItemBlock item={mockItem} />, true, '/cart');
    const links = screen.getAllByRole('link', {
      name: /go back/i,
    });

    userEvent.click(links[1]);

    expect(
      screen.getByRole('heading', {
        name: /all pizzas/i,
      }),
    ).toBeInTheDocument();
  });

  describe('checks the price changing', () => {
    beforeEach(() => {
      renderWithProviders(<FullItemBlock item={mockItem} />);
    });

    test('checks type click', () => {
      const typeItem = screen.getByText(/thin/i);
      const price = screen.getByRole('heading', {
        level: 4,
      });

      userEvent.click(typeItem);

      expect(price).toHaveTextContent('15$');
    });

    test('checks size click', () => {
      const sizeItem = screen.getByText(/16 inch/i);
      const price = screen.getByRole('heading', {
        level: 4,
      });

      userEvent.click(sizeItem);

      expect(price).toHaveTextContent('18$');
    });

    test('checks type and size click', () => {
      const typeItem = screen.getByText(/thin/i);
      const sizeItem = screen.getByText(/14 inch/i);
      const price = screen.getByRole('heading', {
        level: 4,
      });

      userEvent.click(typeItem);
      userEvent.click(sizeItem);

      expect(price).toHaveTextContent('17$');
    });
  });
});
