import { FC } from 'react';
import { ErrorParagraph } from 'src/styles/Base.styled';

import { Article, ErrorHeading } from './ErrorRequest.styled';

export const ErrorRequest: FC = () => {
  return (
    <Article data-testid="itemPage">
      <ErrorHeading>Error: failed to get data from the server</ErrorHeading>
      <ErrorParagraph>
        We are already working on that. Try again later
      </ErrorParagraph>
    </Article>
  );
};
