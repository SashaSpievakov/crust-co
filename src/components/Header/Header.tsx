import { KeyboardEvent, useEffect, useRef } from 'react';
import { BsCart3, BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { shallowEqual } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectCart } from '../../store/slices/cart/selectors/selectCart/selectCart';
import { setTheme } from '../../store/slices/theme/reducer/themeReducer';
import { selectIsLight } from '../../store/slices/theme/selectors/selectIsLight';
import { ButtonCart } from '../../styles/Buttons.styled';
import { Delimiter, HeaderWrapper, Icon, Right } from './Header.styled';
import { LogoSection } from './LogoSection';

const Header = () => {
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const isMounted = useRef<boolean>(false);
  const isMountedSecond = useRef<boolean>(false);
  const location = useLocation();

  const { itemsCount, totalPrice, items } = useAppSelector(
    selectCart,
    shallowEqual,
  );
  const isLight = useAppSelector(selectIsLight);
  const dispatch = useAppDispatch();

  // scroll effect
  useEffect(() => {
    if (isMountedSecond.current) {
      scrollRef.current?.scrollIntoView();
    }

    isMountedSecond.current = true;
  }, [location.pathname]);

  // local storage effects
  useEffect(() => {
    if (isMounted.current) {
      const jsonCart = JSON.stringify(items);
      const jsonTheme = JSON.stringify(isLight);

      localStorage.setItem('cart', jsonCart);
      localStorage.setItem('isLight', jsonTheme);
    }

    isMounted.current = true;
  }, [items, isLight]);

  const changeThemes = () => {
    dispatch(setTheme(!isLight));
  };

  const keyChangeThemes = (e: KeyboardEvent<SVGElement>) => {
    if (e.code === 'Enter') dispatch(setTheme(!isLight));
  };

  return (
    <HeaderWrapper ref={scrollRef} isCart={location.pathname === '/cart'}>
      <LogoSection />

      <Right>
        <Icon
          as={isLight ? BsFillMoonFill : BsFillSunFill}
          onClick={changeThemes}
          onKeyDown={(e) => keyChangeThemes(e)}
          mode={location.pathname === '/cart' ? 'cart' : ''}
          tabIndex={0}
          data-testid="themeIcon"
          data-theme={isLight ? 'light' : 'dark'}
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
    </HeaderWrapper>
  );
};

export default Header;
