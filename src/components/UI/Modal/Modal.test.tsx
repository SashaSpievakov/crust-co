import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CartItemsMockProps } from 'src/tests/mocks/mockData/mockData';
import Modal from './Modal';
import rendererWithAllProviders from '../../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../../tests/helpers/renderWithProviders';

describe('Modal Tests', () => {
  test('renders the Modal UI component', () => {
    const snapshot = rendererWithAllProviders(<Modal setIsOpen={jest.fn()} />);
    expect(snapshot).toMatchSnapshot();
  });

  test('closes Modal by clicking on the cross', async () => {
    renderWithProviders(null, true, '/cart', {
      cart: CartItemsMockProps,
    });
    const buyButton = screen.getByRole('button', {
      name: /buy now/i,
    });

    userEvent.click(buyButton);

    const cross = screen.getByTestId('modalCross');
    expect(
      screen.getByRole('heading', {
        name: 'Order',
      }),
    ).toBeInTheDocument();

    userEvent.click(cross);

    expect(
      screen.queryByRole('heading', {
        name: 'Order',
      }),
    ).not.toBeInTheDocument();
  });
});
