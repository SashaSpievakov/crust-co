import { ModalBg } from 'src/styles/Base.styled';
import { Aricle, Header, SubHeader, CloseButton } from './SuccessModal.styled';

interface SuccessModalProps {
  setIsOpen: (value: boolean) => void;
}

const SuccessModal = ({ setIsOpen }: SuccessModalProps) => {
  return (
    <>
      <ModalBg onClick={() => setIsOpen(false)} />
      <Aricle>
        <Header>Thank you for your order!</Header>
        <SubHeader>
          Our operator will give you a call in a few minutes
        </SubHeader>
        <CloseButton onClick={() => setIsOpen(false)}>
          <span>Close</span>
        </CloseButton>
      </Aricle>
    </>
  );
};
export default SuccessModal;
