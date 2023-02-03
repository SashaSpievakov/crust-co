import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

import Footer from './Footer';
import renderWithTheme from '../../tests/helpers/renderWithTheme';

describe('Footer Test', () => {
  test('renders the Footer component', () => {
    const snapshot = renderer.create(renderWithTheme(<Footer />)).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
