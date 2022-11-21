import styled from "styled-components";

const Top = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 400px) {
    flex-direction: column;
    gap: 15px;
  }
`

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 32px;

  svg {
    position: relative;
    top: -2px;
    width: 30px;
    height: 30px;
    margin-right: 10px;

    path {
      stroke: ${({theme}) => theme.colors.third};
      stroke-width: 1.9;
    }
  }
`

const Clear = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    display: inline-block;
    margin-left: 7px;
    color: #b6b6b6;
    font-size: 18px;
  }

  span,
  svg,
  path {
    transition: all ${({theme}) => theme.duration} ease-in-out;
  }

  &:hover {
    svg {
      path {
        stroke: #373737;
      }
    }
    span {
      color: #373737;
    }
  }
`

const Bottom = styled.section`
  margin: 50px 0;
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 22px;

    &:last-of-type {
      b {
        color: ${({theme}) => theme.colors.primary};
      }
    }
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`

export {Top, Title, Clear, Bottom, Details, Buttons}