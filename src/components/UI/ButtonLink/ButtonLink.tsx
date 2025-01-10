import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { ButtonSecondary } from '../../../styles/Buttons.styled';

interface ButtonLinkProps extends PropsWithChildren {
  link: string;
}

export const ButtonLink: FC<ButtonLinkProps> = ({ link, children }) => {
  return (
    <ButtonSecondary to={link} as={Link}>
      {children}
    </ButtonSecondary>
  );
};
