import { ErrorParagraph } from '@src/styles/Base.styled';
import { FC } from 'react';

import { ButtonLink } from '../../components/UI';
import { Article, Title } from './NotFoundPage.styled';

export const NotFoundPage: FC = () => {
  return (
    <Article>
      <Title>Oops! This page doesn&apos;t exist</Title>
      <ErrorParagraph>
        We couldn&apos;t find the page you were looking for. Please check the
        URL or navigate back to the homepage.
      </ErrorParagraph>
      <ButtonLink link="/">Return Home</ButtonLink>
    </Article>
  );
};
