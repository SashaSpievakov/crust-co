import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import { Wrapper, Main, Container } from '../styles/Base.styled';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const MainLayout = () => {
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const isMounted = useRef<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    if (isMounted.current) {
      scrollRef.current?.scrollIntoView();
    }

    isMounted.current = true;
  }, [location.pathname]);

  return (
    <Wrapper ref={scrollRef}>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer />
    </Wrapper>
  );
};
export default MainLayout;
