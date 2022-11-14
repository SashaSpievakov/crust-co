import styled, {css} from "styled-components";
import { HiMinus, HiPlus } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import ContentLoader from "react-content-loader"

interface LiProps {
  chosen: boolean
}

const mixinBlock = css`
  max-width: 280px;
  text-align: center;
  margin-bottom: 65px;
`

const mixinButton = css`
  font-size: 27px;
  color: ${({theme}) => theme.colors.primary};
  cursor: pointer;
`

const Block = styled.article`
  ${mixinBlock}
`

const Loader = styled(ContentLoader)`
  ${mixinBlock}
`

const Image = styled.img`
  width: 260px;

  @media screen and (max-width: 400px) {
    width: 200px;
  }
`

const Title = styled.h4`
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 1%;
  margin-bottom: 20px;
`

const Selector = styled.div`
  display: flex;
  background-color: #f3f3f3;
  border-radius: 10px;
  flex-direction: column;
  padding: 6px;

  ul {
    display: flex;
    flex: 1;

    &:first-of-type {
      margin-bottom: 6px;
    }
  }
`

const Li = styled.li<LiProps>`
  padding: 8px;
  flex: 1;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;

  ${({chosen}) => chosen && css`
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    cursor: auto;
  `}
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
`

const Price = styled.div`
  font-weight: bold;
  font-size: 32px;
  line-height: 27px;
  letter-spacing: 0.015em;

  @media screen and (max-width: 400px) {
    font-size: 28px;
  }
`

const Counter = styled.div`
  display: flex;
  align-items: center;
  min-width: 100px;
  padding: 8.25px 0;
`

const Minus = styled(HiMinus)`
  ${mixinButton}
  margin-right: 15px;
`

const Plus = styled(HiPlus)`
  ${mixinButton}
`

const Count = styled.span`
  font-size: 22px;
  margin-right: 15px;
`

const MainPlus = styled(BsPlusLg)`
  font-size: 17px;
  padding-bottom: 2px;
  margin-right: 5px;
`

export {Block, Loader, Li, Image, Title, Selector, Bottom, Price, Counter, Minus, Plus, Count, MainPlus}