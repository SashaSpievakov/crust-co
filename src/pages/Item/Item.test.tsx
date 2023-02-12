import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { rest } from 'msw';

import Item from './Item';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import server from '../../tests/mocks/api/server';
import { setupStore } from '../../store/store';
import itemAPI from '../../services/ItemService';

describe('Item Tests', () => {
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

  test('renders the Item page', async () => {
    renderWithProviders(null, true, '/item/9');
    const itemTitle = await screen.findByText(/chicken curry/i); // eslint-disable-line @typescript-eslint/no-unused-vars

    const loadedItem = screen.getByTestId('itemPage');
    expect(loadedItem).toMatchSnapshot();
  });

  test('renders the Item page with a server requesr error', async () => {
    server.use(rest.get('*', (_req, res, ctx) => res.once(ctx.status(500))));

    renderWithProviders(<Item />);
    const error = await screen.findByText(/Error: failed request/i); // eslint-disable-line @typescript-eslint/no-unused-vars

    const loadedItem = screen.getByTestId('itemPage');
    expect(loadedItem).toMatchSnapshot();
  });
});
