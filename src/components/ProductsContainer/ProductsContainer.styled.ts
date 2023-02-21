import styled from 'styled-components';

interface SectionProps {
  hasResult: boolean;
}

const Section = styled.section<SectionProps>`
  display: grid;
  grid-template-columns: ${({ hasResult }) =>
    hasResult ? 'repeat(3, 1fr)' : '1fr'};
  gap: 40px 100px;
  justify-items: center;
  align-items: center;

  @media (max-width: 1150px) {
    grid-template-columns: ${({ hasResult }) =>
      hasResult ? 'repeat(2, 1fr)' : '1fr'};
  }

  @media (max-width: 800px) {
    gap: 40px 50px;
  }

  @media (max-width: 700px) {
    grid-template-columns: ${({ hasResult }) =>
      hasResult ? 'repeat(1, 1fr)' : '1fr'};
    gap: 0;
  }
`;

const SearchError = styled.h3`
  font-size: 35px;
  margin: 100px 0;
`;

export { Section, SearchError };
