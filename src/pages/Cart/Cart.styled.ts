import { BsCart3, BsChevronLeft, BsTrash } from 'react-icons/bs';
import { Container } from 'src/styles/Base.styled';
import styled from 'styled-components';

const Article = styled(Container)`
  margin: 50px auto;

  @media screen and (max-width: 400px) {
    margin: 30px auto;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 400px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 32px;
`;

const CartIcon = styled(BsCart3)`
  stroke-width: 0.5;
  margin-right: 10px;
`;

const Clear = styled.section`
  display: flex;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;

  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.gray};
    outline: 5px solid ${({ theme }) => theme.colors.gray};
    outline-offset: -1px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Trash = styled(BsTrash)`
  font-size: 18px;
  stroke-width: 0.3;
`;

const DeleteText = styled.span`
  display: inline-block;
  margin-left: 7px;
  font-size: 18px;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Bottom = styled.section`
  margin-top: 30px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`;

const Details = styled.section`
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  margin: 40px 50px 0;

  @media screen and (max-width: 400px) {
    margin: 40px 25px 0;
  }
`;

const Buttons = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;
  }
`;

const ChevronLeft = styled(BsChevronLeft)`
  stroke-width: 1.3;
  margin-right: 12px;
`;

export {
  Article,
  Bottom,
  Buttons,
  CartIcon,
  ChevronLeft,
  Clear,
  DeleteText,
  Details,
  Title,
  Top,
  Trash,
};
