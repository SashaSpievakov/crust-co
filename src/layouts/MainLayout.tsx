import { Outlet } from "react-router-dom";

import { Wrapper, Main } from "../Base.styled";
import Header from "../components/Header";

const MainLayout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <div className="container">
          <Outlet />
        </div>
      </Main>
    </Wrapper>
  )
}
export default MainLayout;