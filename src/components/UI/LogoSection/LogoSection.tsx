import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import mainLogo from '../../../assets/img/main-logo.svg';
import { CustomLink, Logo, Heading } from './LogoSection.styled';

const LogoSection = memo(() => {
  const location = useLocation();

  return (
    <CustomLink
      to={location.pathname !== '/' ? '/' : '#'}
      tabIndex={location.pathname !== '/' ? 0 : -1}
      ishome={location.pathname === '/' ? 'home' : null}
    >
      <Logo>
        <img width="38" height="54.5" src={mainLogo} alt="Pizza logo" />
        <div>
          <Heading>Pizza Place</Heading>
          <p>the most delicious pizzas in town</p>
        </div>
      </Logo>
    </CustomLink>
  );
});
export default LogoSection;
