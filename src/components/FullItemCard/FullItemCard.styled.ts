import styled from "styled-components";
import { Container } from "../../Base.styled";

const Item = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  max-width: 500px;
  margin-top: 60px;
  margin-bottom: 40px;

  @media screen and (max-width: 600px) {
    width: 340px;
  }

  @media screen and (max-width: 400px) {
    width: 220px;
  }
`

const Title = styled.h2`
  font-size: 45px;
  text-align: center;
  margin-bottom: 37px;

  @media screen and (max-width: 600px) {
    font-size: 35px;
  }

  @media screen and (max-width: 400px) {
    line-height: 35px;
  }
`

const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 30px;
`

const Price = styled.h4`
  font-size: 40px;
`

export { Item, Image, Title, Paragraph, Price}