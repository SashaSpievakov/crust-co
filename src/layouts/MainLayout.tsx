import { Outlet } from 'react-router-dom';

import { Main } from './MainLayout.styled';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const MainLayout = () => {
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
export default MainLayout;
