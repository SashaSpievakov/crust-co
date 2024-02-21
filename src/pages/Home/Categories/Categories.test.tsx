import '@testing-library/jest-dom';

import { rendererWithProviders } from '../../../tests/helpers';
import { Categories } from './Categories';

describe('Categories Tests', () => {
  test('renders the Categories component', () => {
    const snapshot = rendererWithProviders(
      <Categories activeCategory={0} onSelect={() => null} />,
    );
    expect(snapshot).toMatchSnapshot();
  });

  // test('selects a correct category', () => {
  //   renderWithProviders(
  //     <Categories activeCategory={0} onSelect={() => null} />,
  //   );
  //   const categories = screen.getAllByRole('listitem', { current: false });

  //   userEvent.click(categories[0]);

  //   expect(screen.getByRole('listitem', { current: true })).toHaveTextContent(
  //     /meat/i,
  //   );
  // });
});
