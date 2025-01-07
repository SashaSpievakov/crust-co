import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header, LayoutErrorBoundary } from './components';
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
