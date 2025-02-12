import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import { rest } from 'msw';

import { pizzasAPI } from '@src/services';
import { setupStore } from '@src/store';
import { renderWithProvidersAndRoutes } from '@src/tests/helpers';
import { testServer } from '@src/tests/mocks';

import { HomePage } from './HomePage';

describe('HomePage tests', () => {
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

  test('should render the Home page', async () => {
    renderWithProvidersAndRoutes(<HomePage />);
    const lastItem = await screen.findByText(/diablo/i); // eslint-disable-line @typescript-eslint/no-unused-vars

    const loadedHome = screen.getByTestId('homePage');
    expect(loadedHome).toMatchSnapshot();
  });

  test('should render the Home page with a server request error', async () => {
    testServer.use(
      rest.get('*', (_req, res, ctx) => res.once(ctx.status(500))),
    );
    renderWithProvidersAndRoutes(<HomePage />);

    expect(
      await screen.findByText(/something went wrong/i),
    ).toBeInTheDocument();
  });
});
