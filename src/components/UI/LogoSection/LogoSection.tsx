import { memo } from "react";
import { Link } from "react-router-dom";

import mainLogo from "../../../assets/img/main-logo.svg";
import { Logo, Heading } from "./LogoSection.styled";

const LogoSection = memo(() => {
  return (
    <Link to="/">
      <Logo>
        <img width="38" height="54.5" src={mainLogo} alt="Pizza logo" />
        <div>
          <Heading>Pizza Place</Heading>
          <p>the most delicious pizzas in town</p>
        </div>
      </Logo>
    </Link>
  );
});
export default LogoSection;
