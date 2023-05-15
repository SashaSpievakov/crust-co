import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 90%;
  display: flex;
  margin: 0 auto;
  padding: 40px 0;
  flex-direction: column;
  row-gap: 50px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 50px 0;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    row-gap: 20px;
    margin: 50px 0;
  }
`;

const Contact = styled.a`
  display: flex;
  gap: 5px;
  align-items: center;
  border-radius: 5px;

  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.gray};
    outline: 5px solid ${({ theme }) => theme.colors.gray};
    outline-offset: -1px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};

    span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const Icon = styled.a`
  font-size: 30px;
`;

const Copyright = styled.p`
  text-align: center;
`;

export { FooterWrapper, Ul, Icon, Copyright, Contact };
