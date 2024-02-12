import styled from 'styled-components';

const Article = styled.article`
  display: flex;
  width: 100%;
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  padding-top: 30px;
  margin-top: 30px;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  width: 10%;

  img {
    border-radius: 20px;
  }

  @media screen and (max-width: 850px) {
    width: auto;
    margin-right: 0;

    img {
      width: 200px;
      height: 200px;
    }
  }
`;

const InfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;

  h3 {
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.01em;
  }

  p {
    font-size: 18px;
    color: #8d8d8d;
  }

  @media screen and (max-width: 850px) {
    width: auto;
    text-align: center;
  }
`;

const Counter = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 13%;

  span {
    font-size: 20px;
  }

  @media screen and (max-width: 850px) {
    width: auto;
    gap: 11px;
  }
`;

const CountIcon = styled.i`
  stroke-width: 1;
`;

const Price = styled.h3`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 4%;

  @media screen and (max-width: 850px) {
    position: absolute;
    right: 0;
    top: 20px;
  }
`;

export { Article, Counter, CountIcon, ImgWrapper, InfoWrapper, Price, Remove };
