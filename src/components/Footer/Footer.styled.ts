import styled, { css } from 'styled-components';

const mixinFooterItems = css`
  display: flex;
  width: fit-content;
  flex-direction: column;
  row-gap: 4px;
`;

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
  ${mixinFooterItems}
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
  ${mixinFooterItems}
`;

export { Contact, Contacts, Copyright, FooterWrapper };
