import { ErrorParagraph } from 'src/styles/Base.styled';

import { ButtonLink } from '../../components/UI';
import { Article, Title } from './NotFound.styled';

const NotFound = () => {
  return (
    <Article>
      <Title>The page wasn&apos;t found</Title>
      <ErrorParagraph>Make sure you wrote the correct URL</ErrorParagraph>
      <ButtonLink link="/">Go Back</ButtonLink>
    </Article>
  );
};

export default NotFound;
