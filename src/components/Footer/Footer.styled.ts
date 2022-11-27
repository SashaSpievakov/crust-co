import styled from "styled-components";

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

  span {
    color: ${({ theme }) => theme.colors.third};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;

const Icon = styled.a`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Copyright = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.third};
`;

export { Main, Ul, Icon, Copyright, Link };
