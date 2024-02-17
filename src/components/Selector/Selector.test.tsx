import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ISelector } from '../../models/ISelector';
import { itemAPI } from '../../services';
import { setupStore } from '../../store/store';
import rendererWithAllProviders from '../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../tests/helpers/renderWithProviders';
import server from '../../tests/mocks/api/server';
import { typeNames } from '../FullItemBlock/FullItemBlock';
import Selector from './Selector';

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
  test('renders the Selector UI component', () => {
    const snapshot = rendererWithAllProviders(
      <Selector {...SelectorMockProps} />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  describe('checks select logic', () => {
    beforeAll(() => {
      server.listen();
    });

    afterAll(() => {
      server.close();
    });

    beforeEach(() => {
      renderWithProviders(null, true, '/pizza/9');
    });

    afterEach(() => {
      server.resetHandlers();
      setupStore().dispatch(itemAPI.util.resetApiState());
    });

    test('checks thin type click', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const typeThin = screen.getByText(/thin/i);

      userEvent.click(typeThin);

      expect(price).toHaveTextContent(/15\$/i);
    });

    test('checks traditional type click', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const typeTraditional = screen.getByText(/traditional/i);
      const typeThin = screen.getByText(/thin/i);

      userEvent.click(typeThin);
      userEvent.click(typeTraditional);

      expect(price).toHaveTextContent(/14\$/i);
    });

    test('checks changing from 12 inch to 14 inch', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const fourteen = screen.getByText(/14 inch/i);

      userEvent.click(fourteen);

      expect(price).toHaveTextContent(/16\$/i);
    });

    test('checks changing from 12 inch to 16 inch', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const sixteen = screen.getByText(/16 inch/i);

      userEvent.click(sixteen);

      expect(price).toHaveTextContent(/18\$/i);
    });

    test('checks changing from 14 inch to 16 inch', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const fourteen = screen.getByText(/14 inch/i);
      const sixteen = screen.getByText(/16 inch/i);

      userEvent.click(fourteen);
      expect(price).toHaveTextContent(/16\$/i);

      userEvent.click(sixteen);
      expect(price).toHaveTextContent(/18\$/i);
    });

    test('checks changing from 14 inch to 12 inch', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const fourteen = screen.getByText(/14 inch/i);
      const twelve = screen.getByText(/12 inch/i);

      userEvent.click(fourteen);
      expect(price).toHaveTextContent(/16\$/i);

      userEvent.click(twelve);
      expect(price).toHaveTextContent(/14\$/i);
    });

    test('checks changing from 16 inch to 14 inch', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const fourteen = screen.getByText(/14 inch/i);
      const sixteen = screen.getByText(/16 inch/i);

      userEvent.click(sixteen);
      expect(price).toHaveTextContent(/18\$/i);

      userEvent.click(fourteen);
      expect(price).toHaveTextContent(/16\$/i);
    });

    test('checks changing from 16 inch to 12 inch', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const twelve = screen.getByText(/12 inch/i);
      const sixteen = screen.getByText(/16 inch/i);

      userEvent.click(sixteen);
      expect(price).toHaveTextContent(/18\$/i);

      userEvent.click(twelve);
      expect(price).toHaveTextContent(/14\$/i);
    });

    test('checks thin type and 16 inch clicks together', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const typeThin = screen.getByText(/thin/i);
      const sixteen = screen.getByText(/16 inch/i);

      userEvent.click(sixteen);
      userEvent.click(typeThin);

      expect(price).toHaveTextContent(/19\$/i);
    });

    test('checks triple and double click on 14 inch', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const fourteen = screen.getByText(/14 inch/i);

      userEvent.click(fourteen);
      userEvent.click(fourteen);
      expect(price).toHaveTextContent(/16\$/i);

      userEvent.click(fourteen);
      expect(price).toHaveTextContent(/16\$/i);
    });

    test('checks all clicks combined', async () => {
      const price = await screen.findByRole('heading', {
        level: 3,
      });
      const traditionalType = screen.getByText(/traditional/i);
      const thinType = screen.getByText(/thin/i);
      const twelve = screen.getByText(/12 inch/i);
      const fourteen = screen.getByText(/14 inch/i);
      const sixteen = screen.getByText(/16 inch/i);

      userEvent.click(sixteen);
      userEvent.click(traditionalType);
      userEvent.click(fourteen);
      userEvent.click(twelve);
      userEvent.click(thinType);
      userEvent.click(fourteen);
      userEvent.click(traditionalType);
      userEvent.click(sixteen);
      userEvent.click(twelve);
      userEvent.click(thinType);

      expect(price).toHaveTextContent(/15\$/i);
    });
  });
});
