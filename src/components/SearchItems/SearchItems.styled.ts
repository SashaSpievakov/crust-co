import styled from "styled-components";
import { GrClose } from 'react-icons/gr';

const Wrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  font-size: 16px;
  height: 40px;
  width: 300px;
  padding: 10px 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all .3s ease-in-out;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 400px) {
    width: 225px;
  }
`

const Cross = styled(GrClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  opacity: .3;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    opacity: .7;
  }
`

export {Wrapper, Input, Cross}