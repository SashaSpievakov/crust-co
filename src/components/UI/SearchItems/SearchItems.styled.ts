import { BsSearch, BsXLg } from 'react-icons/bs';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const SearchIcon = styled(BsSearch)`
  position: absolute;
  top: 10px;
  left: 17px;
  font-size: 20px;
  opacity: 0.5;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Input = styled.input<{ width: string; expandedWidth?: string }>`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.third};
  height: 40px;
  width: ${({ width }) => width};
  padding: 10px 33px 10px 50px;
  background-color: ${({ theme }) => theme.colors.gray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: 0.3s;

  &:focus {
    width: ${({ width, expandedWidth }) => expandedWidth || width};
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.third};
    opacity: 0.6;
  }

  @media screen and (max-width: 800px) {
    width: 210px;

    &:focus {
      width: 250px;
    }
  }

  @media screen and (max-width: 400px) {
    width: 180px;

    &:focus {
      width: 240px;
    }
  }
`;

const Cross = styled(BsXLg)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  border-radius: 5px;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.black};
    outline-offset: 3px;
  }
`;

export { Cross, Input, SearchIcon, Wrapper };
