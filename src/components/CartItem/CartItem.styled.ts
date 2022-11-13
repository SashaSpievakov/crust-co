import styled from "styled-components";

const Article = styled.article`
  display: flex;
  width: 100%;
  border-top: 1px solid ${({theme}) => theme.colors.gray};
  padding-top: 30px;
  margin-top: 30px;
`

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  width: 10%;


  img {
    height: 80px;
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
`

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 13%;

  b {
    font-size: 22px;
  }
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
`

export {Article, ImgWrapper, InfoWrapper, Counter, Price, Remove}