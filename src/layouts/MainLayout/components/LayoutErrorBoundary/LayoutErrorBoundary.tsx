import { Component, ReactNode } from 'react';

import { TitleMessage } from './LayoutErrorBoundary.styled';

interface LayoutErrorBoundaryProps {
  children: ReactNode;
}

interface LayoutErrorBoundaryState {
  hasError: boolean;
}

export class LayoutErrorBoundary extends Component<
  LayoutErrorBoundaryProps,
  LayoutErrorBoundaryState
> {
  constructor(props: LayoutErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <TitleMessage>
          Sorry, our website is currently unavailable. We&apos;re working to fix
          it. Thank you for your patience!
        </TitleMessage>
      );
    }

    return children;
  }
}
