import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import { rest } from 'msw';

import itemAPI from '../../services/ItemService';
import { setupStore } from '../../store/store';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import server from '../../tests/mocks/api/server';
import { Pizza } from './Pizza';

describe('Pizza Page Tests', () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    server.resetHandlers();
    setupStore().dispatch(itemAPI.util.resetApiState());
  });

  test('renders the Pizza page', async () => {
    renderWithProviders(null, true, '/pizza/9');
    const itemTitle = await screen.findByText(/chicken curry/i); // eslint-disable-line @typescript-eslint/no-unused-vars

    const loadedItem = screen.getByTestId('itemPage');
    expect(loadedItem).toMatchSnapshot();
  });

  test('renders the Pizza page with a server requesr error', async () => {
    server.use(rest.get('*', (_req, res, ctx) => res.once(ctx.status(500))));
    renderWithProviders(<Pizza />);

    expect(
      await screen.findByText(/failed to get data from the server/i),
    ).toBeInTheDocument();
  });
});
