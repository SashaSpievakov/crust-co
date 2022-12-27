import styled, { css } from "styled-components";
import ContentLoader from "react-content-loader";

const mixinBlock = css`
  max-width: 280px;
  text-align: center;
  margin-bottom: 65px;

  &:hover {
    img {
      transform: translateY(-10px);
    }

    h4 {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const Block = styled.article`
  ${mixinBlock}
`;

const Loader = styled(ContentLoader)`
  ${mixinBlock}
`;

const Image = styled.img`
  width: 250px;
  margin-bottom: 15px;
  border-radius: 20px;
  transition: 0.2s ease-in-out;

  @media screen and (max-width: 400px) {
    width: 200px;
  }
`;

const Title = styled.h4`
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 1%;
  margin-bottom: 20px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 32px;
  line-height: 27px;
  letter-spacing: 0.015em;

  @media screen and (max-width: 400px) {
    font-size: 28px;
  }
`;

export { Block, Loader, Image, Title, Bottom, Price };
