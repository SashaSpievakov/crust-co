import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: end;
  padding: 60px 0;
  row-gap: 50px;

  @media screen and (max-width: 720px) {
    width: fit-content;
    margin: auto;
    flex-direction: column-reverse;
    align-items: stretch;
  }
`;

const Contacts = styled.section`
  display: flex;
  width: fit-content;
  flex-direction: column;
  row-gap: 4px;
`;

const Contact = styled.a`
  width: fit-content;
  border-radius: 5px;

  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.gray};
    outline: 5px solid ${({ theme }) => theme.colors.gray};
    outline-offset: -1px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Copyright = styled.section`
  display: flex;
  width: fit-content;
  flex-direction: column;
  row-gap: 4px;
`;

export { FooterWrapper, Contacts, Contact, Copyright };
