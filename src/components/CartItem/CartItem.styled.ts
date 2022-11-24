import styled from "styled-components";

const Article = styled.article`
  display: flex;
  width: 100%;
  border-top: 1px solid ${({theme}) => theme.colors.gray};
  padding-top: 30px;
  margin-top: 30px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
  }
`

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  width: 10%;


  img {
    height: 80px;
    border-radius: 20px;
  }

  @media screen and (max-width: 800px) {
    width: auto;
    margin-right: 0;

    img {
      height: 200px;
    }
  }
`

const InfoWrapper = styled.div`
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

  @media screen and (max-width: 800px) {
    width: auto;
    text-align: center;
  }
`

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 13%;

  b {
    font-size: 22px;
  }

  @media screen and (max-width: 800px) {
    width: auto;
    gap: 7px;
  }
`

const CountIcon = styled.i`
  stroke-width: 1;
`

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;

  b {
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 0.01em;
  }
`

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 4%;

  @media screen and (max-width: 800px) {
    width: auto;
  }
`

export {Article, ImgWrapper, InfoWrapper, Counter, CountIcon, Price, Remove}