import styled from "styled-components";

const Loading = styled.div`
  font-size: 45px;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: 400px) {
    font-size: 35px;
  }
`;

export default Loading;
