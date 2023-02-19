import { Outlet } from 'react-router-dom';

import { Main } from './MainLayout.styled';
import { Container } from '../styles/Base.styled';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer />
    </>
  );
};
export default MainLayout;
