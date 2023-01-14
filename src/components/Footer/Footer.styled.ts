import styled from 'styled-components';

const Main = styled.footer`
  width: 90%;
  display: flex;
  margin: 0 auto;
  padding: 40px 0;
  flex-direction: column;
  row-gap: 50px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    row-gap: 20px;
  }
`;

const Link = styled.a`
  display: flex;
  gap: 5px;
  align-items: center;

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

export { Main, Ul, Icon, Copyright, Link };
