import { ErrorParagraph } from '@src/styles/Base.styled';
import { FC } from 'react';

import { Article, ErrorHeading } from './ErrorRequest.styled';

export const ErrorRequest: FC = () => {
  return (
    <Article data-testid="itemPage">
      <ErrorHeading>Oops! Something went wrong.</ErrorHeading>
      <ErrorParagraph>
        We&apos;re having trouble fetching the data right now. Our team is on
        it, please try again later.
      </ErrorParagraph>
    </Article>
  );
};
