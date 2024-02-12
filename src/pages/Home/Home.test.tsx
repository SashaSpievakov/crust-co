import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import { rest } from 'msw';

import pizzasAPI from '../../services/PizzasService';
import { setupStore } from '../../store/store';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import server from '../../tests/mocks/api/server';
import Home from './Home';

describe('Home Tests', () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    server.resetHandlers();
    setupStore().dispatch(pizzasAPI.util.resetApiState());
  });

  test('renders the Home page', async () => {
    renderWithProviders(<Home />);
    const lastItem = await screen.findByText(/diablo/i); // eslint-disable-line @typescript-eslint/no-unused-vars

    const loadedHome = screen.getByTestId('homePage');
    expect(loadedHome).toMatchSnapshot();
  });

  test('renders the Home page with a server requesr error', async () => {
    server.use(rest.get('*', (_req, res, ctx) => res.once(ctx.status(500))));
    renderWithProviders(<Home />);

    expect(
      await screen.findByText(/failed to get data from the server/i),
    ).toBeInTheDocument();
  });
});
