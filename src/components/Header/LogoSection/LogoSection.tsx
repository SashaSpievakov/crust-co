import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import mainLogo from '../../../assets/img/main-logo.svg';
import { CustomLink, Heading, Logo, SubHeading } from './LogoSection.styled';

export const LogoSection = memo(() => {
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
          <Heading>Crust & Co.</Heading>
          <SubHeading>the most delicious pizzas in town</SubHeading>
        </div>
      </Logo>
    </CustomLink>
  );
});
