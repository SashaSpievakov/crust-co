import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { rest } from 'msw';

import Home from './Home';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import server from '../../tests/mocks/api/server';
import { setupStore } from '../../store/store';
import pizzasAPI from '../../services/PizzasService';

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
    const error = await screen.findByText(/request error/i); // eslint-disable-line @typescript-eslint/no-unused-vars

    const loadedHome = screen.getByTestId('homePage');
    expect(loadedHome).toMatchSnapshot();
  });
});
