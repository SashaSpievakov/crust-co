import { useEffect, useRef } from 'react';
import { shallowEqual } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { BsCart3, BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

import LogoSection from '../UI/LogoSection/LogoSection';
import { setTheme } from '../../store/slices/theme/reducer/themeReducer';
import { selectIsLight } from '../../store/slices/theme/selectors/selectIsLight';
import { selectCart } from '../../store/slices/cart/selectors/selectCart/selectCart';
import { Main, Wrapper, Right, Icon, Delimiter } from './Header.styled';
import { ButtonCart } from '../../styles/Buttons.styled';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

const Header = () => {
  const { itemsCount, totalPrice, items } = useAppSelector(
    selectCart,
    shallowEqual,
  );
  const isLight = useAppSelector(selectIsLight);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }

    isMounted.current = true;
  }, [items]);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(isLight);
      localStorage.setItem('isLight', json);
    }
  }, [isLight]);

  const changeThemes = () => {
    dispatch(setTheme(!isLight));
  };

  return (
    <Main>
      <Wrapper isCart={location.pathname === '/cart'}>
        <LogoSection />

        <Right>
          <Icon
            as={isLight ? BsFillMoonFill : BsFillSunFill}
            onClick={changeThemes}
            mode={location.pathname === '/cart' ? 'cart' : ''}
          />
          {location.pathname !== '/cart' && (
            <ButtonCart to="/cart" as={Link} data-testid="cartLink">
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
