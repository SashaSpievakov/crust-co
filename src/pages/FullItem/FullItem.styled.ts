import styled from "styled-components";
import { Container } from "../../styles/Base.styled";

const Item = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  max-width: 450px;
  margin-top: 60px;
  margin-bottom: 40px;
  border-radius: 20px;

  @media screen and (max-width: 600px) {
    width: 300px;
    margin-top: 50px;
  }

  @media screen and (max-width: 400px) {
    width: 200px;
    margin-top: 20px;
  }
`;

const Title = styled.h2`
  font-size: 45px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 37px;

  @media screen and (max-width: 600px) {
    font-size: 35px;
  }

  @media screen and (max-width: 400px) {
    line-height: 35px;
  }
`;

const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 30px;
`;

const Price = styled.h4`
  font-size: 40px;
`;

export { Item, Image, Title, Paragraph, Price };
