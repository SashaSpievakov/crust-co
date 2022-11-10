import { Outlet } from "react-router-dom";

import { Wrapper } from "../Base.styled";
import Header from "../components/Header";

const MainLayout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <div className="content">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  )
}
export default MainLayout;