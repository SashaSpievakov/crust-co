import { Title, Wrapper } from './NotFound.styled';
import ButtonBackToHome from '../../components/UI/ButtonBackToHome/ButtonBackToHome';

const NotFound = () => {
  return (
    <Wrapper>
      <Title>The page wasn&apos;t found</Title>
      <ButtonBackToHome />
    </Wrapper>
  );
};

export default NotFound;
