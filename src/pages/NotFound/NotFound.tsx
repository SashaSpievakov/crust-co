import { Link } from 'react-router-dom';

import { ButtonBlack } from '../../styles/Buttons.styled';
import { Title, Wrapper } from './NotFound.styled';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Title>The page wasn&apos;t found</Title>
      <ButtonBlack to="/" as={Link}>
        <span>Go Back</span>
      </ButtonBlack>
    </Wrapper>
  );
};

export default NotFoundPage;
