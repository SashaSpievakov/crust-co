import { Outlet } from "react-router-dom";

import { Wrapper, Main, Container } from "../Base.styled";
import Header from "../components/Header/Header";

const MainLayout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </Wrapper>
  )
}
export default MainLayout;