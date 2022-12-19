import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCart3, BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import mainLogo from "../../assets/img/main-logo.svg";
import { selectCart } from "../../store/slices/cartSlice";
import { setTheme, selectIsLight } from "../../store/slices/themeSlice";
import { Main, Wrapper, Logo, Right, Icon, Delimiter } from "./Header.styled";
import { ButtonCart } from "../Buttons/Buttons.styled";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

const Header = () => {
  const { itemsCount, totalPrice, items } = useAppSelector(selectCart);
  const isLight = useAppSelector(selectIsLight);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isMounted = useRef(false);

  const changeThemes = () => {
    dispatch(setTheme(!isLight));
  };

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }

    isMounted.current = true;
  }, [items]);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(isLight);
      localStorage.setItem("isLight", json);
    }
  }, [isLight]);

  return (
    <Main>
      <Wrapper isCart={location.pathname === "/cart"}>
        <Link to="/">
          <Logo>
            <img width="38" src={mainLogo} alt="Pizza logo" />
            <div>
              <h1>Pizza Place</h1>
              <p>the most delicious pizzas in town</p>
            </div>
          </Logo>
        </Link>

        <Right>
          <Icon
            as={isLight ? BsFillMoonFill : BsFillSunFill}
            onClick={changeThemes}
          />
          {location.pathname !== "/cart" && (
            <ButtonCart to="/cart" as={Link}>
              <span>{totalPrice} $</span>
              <Delimiter />
              <BsCart3 />
              <span>{itemsCount}</span>
            </ButtonCart>
          )}
        </Right>
      </Wrapper>
    </Main>
  );
};

export default Header;
