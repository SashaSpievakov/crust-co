import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { SkeletonLoader } from './SkeletonLoader';
import renderWithAllProviders from '../../../tests/helpers/renderWithProviders';

describe('Skeleton Tests', () => {
  test('renders the Skeleton UI component', () => {
    renderWithAllProviders(
      <SkeletonLoader>
        <rect x="5" y="335" rx="5" ry="5" width="240" height="68" />
      </SkeletonLoader>,
    );
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });
});