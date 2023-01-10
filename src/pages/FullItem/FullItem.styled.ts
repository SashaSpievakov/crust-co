import styled from "styled-components";

const Error = styled.h2`
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: 550px) {
    padding-bottom: 25px;
  }
`;

export default Error;
