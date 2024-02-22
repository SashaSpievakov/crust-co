import { FC } from 'react';
import { ModalBg } from 'src/styles/Base.styled';

import { Aricle, CloseButton, Header, SubHeader } from './SuccessModal.styled';

interface SuccessModalProps {
  setIsOpen: (value: boolean) => void;
}

export const SuccessModal: FC<SuccessModalProps> = ({ setIsOpen }) => {
  return (
    <>
      <ModalBg onClick={() => setIsOpen(false)} />
      <Aricle>
        <Header>Thank you for your order!</Header>
        <SubHeader>
          Our operator will give you a call in a few minutes
        </SubHeader>
        <CloseButton onClick={() => setIsOpen(false)}>Close</CloseButton>
      </Aricle>
    </>
  );
};
