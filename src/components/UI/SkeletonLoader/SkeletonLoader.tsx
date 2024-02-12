import { FunctionComponent, ReactNode } from 'react';

import Loader from './SkeletonLoader.styled';

interface SkeletonLoaderProps {
  children: ReactNode;
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
}

export const SkeletonLoader: FunctionComponent<SkeletonLoaderProps> = ({
  children,
  className,
  width,
  height,
  viewBox,
}) => {
  return (
    <Loader
      speed={2}
      width={width}
      height={height}
      viewBox={viewBox}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className={className}
    >
      {children}
    </Loader>
  );
};
