import styled from 'styled-components';
import { BsXLg, BsSearch } from 'react-icons/bs';

const Section = styled.section`
  position: relative;
`;

const SearchIcon = styled(BsSearch)`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  opacity: 0.5;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Input = styled.input`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.third};
  height: 40px;
  width: 240px;
  padding: 10px 33px 10px 40px;
  background-color: ${({ theme }) => theme.colors.gray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: 0.3s;

  &:focus {
    width: 300px;
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
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export { Section, SearchIcon, Input, Cross };
