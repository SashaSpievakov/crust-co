import { FunctionComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { ButtonBack } from '../../../styles/Buttons.styled';

interface ButtonLinkProps {
  link: string;
  children: ReactNode;
}

export const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  link,
  children,
}) => {
  return (
    <ButtonBack to={link} as={Link}>
      {children}
    </ButtonBack>
  );
};
