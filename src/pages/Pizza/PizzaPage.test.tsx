import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import { rest } from 'msw';

import { pizzaAPI } from '../../services';
import { setupStore } from '../../store';
import { renderWithProvidersAndRoutes } from '../../tests/helpers';
import { testServer } from '../../tests/mocks';
import { PizzaPage } from './PizzaPage';

describe('PizzaPage tests', () => {
  beforeAll(() => {
    testServer.listen();
  });

  afterAll(() => {
    testServer.close();
  });

  afterEach(() => {
    testServer.resetHandlers();
    setupStore().dispatch(pizzaAPI.util.resetApiState());
  });

  test('should render the Pizza page', async () => {
    renderWithProvidersAndRoutes(null, true, '/pizzas/Chicken%20Curry');
    const itemTitle = await screen.findByText(/chicken curry/i); // eslint-disable-line @typescript-eslint/no-unused-vars

    const loadedItem = screen.getByTestId('itemPage');
    expect(loadedItem).toMatchSnapshot();
  });

  test('should render the Pizza page with a server request error', async () => {
    testServer.use(
      rest.get('*', (_req, res, ctx) => res.once(ctx.status(500))),
    );
    renderWithProvidersAndRoutes(<PizzaPage />);

    expect(
      await screen.findByText(/something went wrong/i),
    ).toBeInTheDocument();
  });
});
