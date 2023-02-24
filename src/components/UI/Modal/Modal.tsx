import { Bg, Aricle } from './Modal.styled';

interface ModalProps {
  setIsOpen: (value: boolean) => void;
}

const Modal = ({ setIsOpen }: ModalProps) => {
  return (
    <Bg onClick={() => setIsOpen(false)}>
      <Aricle>some texxt</Aricle>
    </Bg>
  );
};
export default Modal;
