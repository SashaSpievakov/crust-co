import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Main } from './MainLayout.styled';

export const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
