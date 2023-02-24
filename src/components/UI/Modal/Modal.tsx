import { Bg, Aricle, Header } from './Modal.styled';

interface ModalProps {
  setIsOpen: (value: boolean) => void;
}

const Modal = ({ setIsOpen }: ModalProps) => {
  return (
    <Bg onClick={() => setIsOpen(false)}>
      <Aricle>
        <Header>Order</Header>
      </Aricle>
    </Bg>
  );
};
export default Modal;
