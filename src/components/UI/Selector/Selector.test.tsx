import '@testing-library/jest-dom';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import Selector from './Selector';
import rendererWithAllProviders from '../../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../../tests/helpers/renderWithProviders';
import { typeNames } from '../../FullItemBlock/FullItemBlock';
import { ISelector } from '../../../models/ISelector';
import server from '../../../tests/mocks/api/server';
import { setupStore } from '../../../store/store';
import itemAPI from '../../../services/ItemService';

const SelectorMockProps: ISelector = {
  price: 10,
  sizes: [12, 14, 16],
  types: [0, 1],
  activeSize: 0,
  activeType: 0,
  setActivePrice: jest.fn(),
  setActiveSize: jest.fn(),
  setActiveType: jest.fn(),
  typeNames,
  isFullScreen: true,
};

describe('Selector Tests', () => {
  test('renders the Selector component', () => {
    const snapshot = rendererWithAllProviders(
      <Selector {...SelectorMockProps} />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  describe('checks select logic', () => {
    beforeAll(() => {
      server.listen();
    });

    // beforeEach(() => {
    //   renderWithProviders(null, true, '/item/9');
    // });

    afterEach(() => {
      server.resetHandlers();
      setupStore().dispatch(itemAPI.util.resetApiState());
    });

    afterAll(() => {
      server.close();
    });

    // test('checks thin type click', async () => {
    //   const price = await screen.findByRole('heading', {
    //     level: 3,
    //   });
    //   const typeThin = screen.getByText(/thin/i);

    //   userEvent.click(typeThin);

    //   expect(price).toHaveTextContent(/15\$/i);
    // });

    // test('checks traditional type click', async () => {
    //   const price = await screen.findByRole('heading', {
    //     level: 3,
    //   });
    //   const typeTraditional = screen.getByText(/traditional/i);
    //   const typeThin = screen.getByText(/thin/i);

    //   userEvent.click(typeThin);
    //   userEvent.click(typeTraditional);

    //   expect(price).toHaveTextContent(/14\$/i);
    // });

    test('checks changing from 12 inch to 14 inch', async () => {
      renderWithProviders(null, true, '/item/9');
      // const price = await screen.findByRole('heading', {
      //   level: 3,
      // });
      // const fourteen = screen.getByText(/14 inch/i);
      // screen.debug();

      // userEvent.click(fourteen);

      // expect(price).toHaveTextContent(/16\$/i);
    });
  });
});
