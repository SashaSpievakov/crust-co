import { Outlet } from "react-router-dom";

import { Wrapper, Main, Container } from "../styles/Base.styled";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function MainLayout() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer />
    </Wrapper>
  );
}
export default MainLayout;
