import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { ButtonBack } from '../../../styles/Buttons.styled';

interface ButtonLinkProps {
  link: string;
  children: ReactNode;
}

export const ButtonLink = ({ link, children }: ButtonLinkProps) => {
  return (
    <ButtonBack to={link} as={Link}>
      {children}
    </ButtonBack>
  );
};
