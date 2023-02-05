import '@testing-library/jest-dom';

import Footer from './Footer';
import rendererWithTheme from '../../tests/helpers/renderer/rendererWithTheme';

describe('Footer Test', () => {
  test('renders the Footer component', () => {
    const snapshot = rendererWithTheme(<Footer />);
    expect(snapshot).toMatchSnapshot();
  });
});
