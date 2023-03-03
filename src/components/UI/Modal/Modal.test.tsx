import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from './Modal';
import rendererWithAllProviders from '../../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../../tests/helpers/renderWithProviders';

describe('Modal Tests', () => {
  test('renders the Modal UI component', () => {
    const snapshot = rendererWithAllProviders(<Modal setIsOpen={jest.fn()} />);
    expect(snapshot).toMatchSnapshot();
  });

  describe('checks select logic', () => {
    test('checks thin type click', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const typeThin = screen.getByText(/thin/i);

      userEvent.click(typeThin);

      expect(price).toHaveTextContent(/15\$/i);
    });
  });
});
