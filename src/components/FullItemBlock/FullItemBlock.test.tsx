import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FullItemBlock from './FullItemBlock';
import { IPizzaItem } from '../../models/IPizzaItem';
import rendererWithAllProviders from '../../tests/helpers/rendererWithAllProviders';
import renderWithAllProviders from '../../tests/helpers/renderWithAllProviders';

const FullItemProp: IPizzaItem = {
  id: '12',
  name: 'Chicken Curry',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed vitae, ab eum nam facilis, soluta corporis molestiae quam, quis cumque consequuntur suscipit dolore praesentium fugiat minima voluptas doloribus aliquid optio!',
  types: [0, 1],
  sizes: [12, 14, 16],
  price: 14,
  category: 1,
  rating: 11,
};

describe('FullItemBlock Test', () => {
  test('renders the FullItemBlock component', () => {
    const snapshot = rendererWithAllProviders(
      <FullItemBlock item={FullItemProp} />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  describe('checks price changings', () => {
    beforeEach(() => {
      renderWithAllProviders(<FullItemBlock item={FullItemProp} />);
    });

    test('checks type click', () => {
      const typeItem = screen.getByText(/thin/i);
      const price = screen.getByRole('heading', {
        level: 4,
      });

      userEvent.click(typeItem);
      expect(price).toHaveTextContent('15$');
    });

    test('checks size click', () => {
      const sizeItem = screen.getByText(/16 inch/i);
      const price = screen.getByRole('heading', {
        level: 4,
      });

      userEvent.click(sizeItem);
      expect(price).toHaveTextContent('18$');
    });

    test('checks type and size click', () => {
      const typeItem = screen.getByText(/thin/i);
      const sizeItem = screen.getByText(/14 inch/i);
      const price = screen.getByRole('heading', {
        level: 4,
      });

      userEvent.click(typeItem);
      userEvent.click(sizeItem);
      expect(price).toHaveTextContent('17$');
    });
  });
});
