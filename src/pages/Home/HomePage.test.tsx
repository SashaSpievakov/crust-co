import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import { rest } from 'msw';

import { pizzasAPI } from '../../services';
import { setupStore } from '../../store/store';
import { renderWithProvidersAndRoutes } from '../../tests/helpers';
import { testServer } from '../../tests/mocks';
import { HomePage } from './HomePage';

describe('Home Tests', () => {
  beforeAll(() => {
    testServer.listen();
  });

  afterAll(() => {
    testServer.close();
  });

  afterEach(() => {
    testServer.resetHandlers();
    setupStore().dispatch(pizzasAPI.util.resetApiState());
  });

  test('renders the Home page', async () => {
    renderWithProvidersAndRoutes(<HomePage />);
    const lastItem = await screen.findByText(/diablo/i); // eslint-disable-line @typescript-eslint/no-unused-vars

    const loadedHome = screen.getByTestId('homePage');
    expect(loadedHome).toMatchSnapshot();
  });

  test('renders the Home page with a server request error', async () => {
    testServer.use(
      rest.get('*', (_req, res, ctx) => res.once(ctx.status(500))),
    );
    renderWithProvidersAndRoutes(<HomePage />);

    expect(
      await screen.findByText(/something went wrong/i),
    ).toBeInTheDocument();
  });
});
