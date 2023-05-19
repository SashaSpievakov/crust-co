import styled from 'styled-components';
import { Container } from '../../styles/Base.styled';

const Item = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 600px) {
    gap: 15px;
  }

  @media screen and (max-width: 400px) {
    gap: 10px;
  }
`;

const Image = styled.img`
  margin-top: 60px;
  margin-bottom: 40px;
  border-radius: 20px;

  @media screen and (max-width: 600px) {
    width: 300px;
    height: 300px;
    margin-top: 50px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 400px) {
    width: 200px;
    height: 200px;
    margin-top: 20px;
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  font-size: 45px;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 35px;
    margin-bottom: 0;
  }

  @media screen and (max-width: 400px) {
    line-height: 35px;
  }
`;

const Paragraph = styled.p`
  font-size: 19px;
  max-width: 600px;
  text-align: center;
  margin-bottom: 15px;

  @media screen and (max-width: 550px) {
    font-size: 14px;
  }
`;

const Price = styled.h3`
  font-size: 45px;

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

export { Item, Image, Title, Paragraph, Price };
