import styled from 'styled-components';

const Bg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
`;

const Aricle = styled.article`
  position: fixed;
  top: 30%;
  left: 50%;
  text-align: center;
  width: 60%;
  height: 30%;
  background: ${({ theme }) => theme.colors.fourth};
  transform: translate(-50%, -50%);
  z-index: 10;
  border-radius: 15px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
`;

const Header = styled.h3`
  font-size: 2.5rem;
  margin-top: 7%;
`;

export { Bg, Aricle, Header };
