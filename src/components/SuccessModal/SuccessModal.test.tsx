import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartItemsMockProps } from 'src/tests/mocks/mockData/mockData';

import {
  rendererWithProviders,
  renderWithProvidersAndRoutes,
} from '../../tests/helpers';
import { SuccessModal } from './SuccessModal';

describe('SuccessModal Tests', () => {
  test('renders the SuccessModal UI component', () => {
    const snapshot = rendererWithProviders(
      <SuccessModal setIsOpen={jest.fn()} />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  test('closes the SuccessModal', async () => {
    renderWithProvidersAndRoutes(null, true, '/cart', {
      cart: CartItemsMockProps,
    });
    const buyButton = screen.getByRole('button', {
      name: /buy now/i,
    });

    userEvent.click(buyButton);

    const sumbitBtn = screen.getByRole('button', {
      name: /send/i,
    });
    const inputs = screen.getAllByRole('textbox');
    const phoneInput = screen.getByRole('spinbutton');

    userEvent.type(phoneInput, '4730395859');
    userEvent.type(inputs[0], 'Alex');
    userEvent.type(inputs[1], 'Toronto');
    userEvent.type(inputs[2], 'some address');
    userEvent.click(sumbitBtn);

    const returnBtn = await screen.findByText(/close/i);

    userEvent.click(returnBtn);

    expect(
      screen.queryByText(/thank you for your order!/i),
    ).not.toBeInTheDocument();
  });
});
