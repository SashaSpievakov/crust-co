import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Block = styled.article`
  width: 250px;
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

  @media screen and (max-width: 400px) {
    width: 200px;
  }
`;

const CustomLink = styled(Link)`
  display: block;
  border-radius: 5px;

  &:focus-visible {
    outline: 5px solid ${({ theme }) => theme.colors.third};
  }
`;

const Image = styled.img`
  margin-bottom: 15px;
  border-radius: 20px;
  transition: 0.2s ease-in-out;

  @media screen and (max-width: 400px) {
    width: 200px;
    height: 200px;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 1%;
  margin-bottom: 20px;
`;

const Bottom = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const Price = styled.h3`
  font-weight: bold;
  font-size: 32px;
  line-height: 27px;
  letter-spacing: 0.015em;

  @media screen and (max-width: 400px) {
    font-size: 28px;
  }
`;

export { Block, CustomLink, Image, Title, Bottom, Price };
