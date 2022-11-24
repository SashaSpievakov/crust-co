import styled from "styled-components";
import { BsXLg, BsSearch } from 'react-icons/bs';

const Wrapper = styled.div`
  position: relative;
`

const SearchIcon = styled(BsSearch)`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  opacity: .6;
`

const Input = styled.input`
  font-size: 16px;
  height: 40px;
  width: 300px;
  padding: 10px 33px 10px 40px;
  background-color: ${({theme}) => theme.colors.gray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all ${({theme}) => theme.duration} ease-in-out;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  &::placeholder {
    color: ${({theme}) => theme.colors.black};
    opacity: .6;
  }

  @media screen and (max-width: 400px) {
    width: 225px;
  }
`

const Cross = styled(BsXLg)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  opacity: .3;
  cursor: pointer;
  transition: all ${({theme}) => theme.duration} ease-in-out;

  &:hover {
    opacity: .7;
  }
`

export {Wrapper, SearchIcon, Input, Cross}