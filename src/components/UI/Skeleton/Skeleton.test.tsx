import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import Skeleton from './Skeleton';
import renderWithAllProviders from '../../../tests/helpers/renderWithProviders';

describe('Skeleton Tests', () => {
  test('renders the Skeleton UI component', () => {
    renderWithAllProviders(<Skeleton />);
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });
});
