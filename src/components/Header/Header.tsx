import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

import mainLogo from "../../assets/img/main-logo.svg";
import { selectCart } from "../../redux/slices/cartSlice";
import { Main, Wrapper, Logo } from "./Header.styled";

const Header: React.FC = () => {
  const {itemsCount, totalPrice} = useSelector(selectCart);
  const location = useLocation();

  return (
    <Main>
      <Wrapper>
        <Link to="/">
          <Logo>
            <img width="38" src={mainLogo} alt="Pizza logo" />
            <div>
              <h1>Pizza Place</h1>
              <p>the most delicious pizzas in town</p>
            </div>
          </Logo>
        </Link>
        {location.pathname !== "/cart" && (
          <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} $</span>
            <div className="button__delimiter"></div>
            <BsCart3 />
            <span>{itemsCount}</span>
          </Link>
        </div>
        )}
      </Wrapper>
    </Main>
  )
}
export default Header