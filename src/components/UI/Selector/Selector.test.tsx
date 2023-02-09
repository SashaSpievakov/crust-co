import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Selector from './Selector';
import rendererWithAllProviders from '../../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../../tests/helpers/renderWithProviders';
import { typeNames } from '../../FullItemBlock/FullItemBlock';
import { ISelector } from '../../../models/ISelector';

const setPriceMock = jest.fn();
const setSizeMock = jest.fn();
const setTypeMock = jest.fn();

const SelectorMockProps: ISelector = {
  price: 10,
  sizes: [12, 14, 16],
  types: [0, 1],
  activeSize: 0,
  activeType: 0,
  setActivePrice: setPriceMock,
  setActiveSize: setSizeMock,
  setActiveType: setTypeMock,
  typeNames,
  isFullScreen: false,
};

describe('Selector Tests', () => {
  test('renders the Selector component', () => {
    const snapshot = rendererWithAllProviders(
      <Selector {...SelectorMockProps} />,
    );
    expect(snapshot).toMatchSnapshot();
  });
});
