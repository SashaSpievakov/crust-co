import styled from 'styled-components';
import { BsCart3, BsTrash, BsChevronLeft } from 'react-icons/bs';

const Top = styled.section`
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
  cursor: pointer;

  span {
    display: inline-block;
    margin-left: 7px;
    font-size: 18px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};

    span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const Trash = styled(BsTrash)`
  font-size: 18px;
  stroke-width: 0.3;
`;

const Bottom = styled.section`
  margin: 50px 0;
`;

const Details = styled.section`
  font-size: 22px;
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const ChevronLeft = styled(BsChevronLeft)`
  stroke-width: 1.3;
  margin-right: 12px;
`;

export {
  Top,
  Title,
  CartIcon,
  Clear,
  Trash,
  Bottom,
  Details,
  Buttons,
  ChevronLeft,
};
