import { ErrorParagraph } from 'src/styles/Base.styled';

import ButtonBackToHome from '../../components/UI/ButtonBackToHome/ButtonBackToHome';
import { Article, Title } from './NotFound.styled';

const NotFound = () => {
  return (
    <Article>
      <Title>The page wasn&apos;t found</Title>
      <ErrorParagraph>Make sure you wrote the correct URL</ErrorParagraph>
      <ButtonBackToHome />
    </Article>
  );
};

export default NotFound;
