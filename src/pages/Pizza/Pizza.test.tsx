import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import { rest } from 'msw';

import { pizzaAPI } from '../../services';
import { setupStore } from '../../store/store';
import { renderWithProvidersAndRoutes } from '../../tests/helpers';
import { testServer } from '../../tests/mocks';
import { Pizza } from './Pizza';

describe('Pizza Page Tests', () => {
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

  test('renders the Pizza page', async () => {
    renderWithProvidersAndRoutes(null, true, '/pizzas/Chicken%20Curry');
    const itemTitle = await screen.findByText(/chicken curry/i); // eslint-disable-line @typescript-eslint/no-unused-vars

    const loadedItem = screen.getByTestId('itemPage');
    expect(loadedItem).toMatchSnapshot();
  });

  test('renders the Pizza page with a server requesr error', async () => {
    testServer.use(
      rest.get('*', (_req, res, ctx) => res.once(ctx.status(500))),
    );
    renderWithProvidersAndRoutes(<Pizza />);

    expect(
      await screen.findByText(/failed to get data from the server/i),
    ).toBeInTheDocument();
  });
});
