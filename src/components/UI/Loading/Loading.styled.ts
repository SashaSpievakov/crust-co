import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const Wrapper = styled.section`
  width: 100px;
  margin: 0 auto;
`;

const Loader = styled.svg`
  width: 100px;
  height: 100px;
  margin: 250px auto;
  animation: ${rotate} 2s linear infinite;
`;

const Circle = styled.circle`
  stroke: ${({ theme }) => theme.colors.primary};
  stroke-linecap: round;
  animation: ${dash} 1.5s ease-in-out infinite;
`;

export { Wrapper, Loader, Circle };
