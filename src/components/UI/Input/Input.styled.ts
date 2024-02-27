import styled from 'styled-components';

const Group = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
`;

const Label = styled.label`
  font-size: 1.3em;
  font-weight: 700;

  @media screen and (max-width: 720px) {
    font-size: 1.15rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1.2em;
  width: 100%;
  padding: 0.5em 0.7em;
  color: ${({ theme }) => theme.colors.third};
  background-color: ${({ theme }) => theme.colors.gray};
  border: 3px solid ${({ theme }) => theme.colors.secondaryTransparent};
  border-radius: 10px;

  &:focus {
    border: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  @media screen and (max-width: 720px) {
    padding: 0.3em 0.5em;
  }
`;

export { Group, Label, StyledInput };
