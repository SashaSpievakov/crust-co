import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { LayoutErrorBoundary } from '../LayoutErrorBoundary';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './MainLayout.styled';

export const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <LayoutErrorBoundary>
          <Outlet />
        </LayoutErrorBoundary>
      </Main>
      <Footer />
    </>
  );
};
