import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Main } from './MainLayout.styled';

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
