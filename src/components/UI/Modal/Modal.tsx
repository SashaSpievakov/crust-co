import { FC, KeyboardEvent, ReactNode, useEffect } from 'react';
import { ModalBg } from 'src/styles/Base.styled';

import { Cross, Header, ModalWrapper, SubHeader } from './Modal.styled';

interface ModalProps {
  title?: string;
  subTitle?: string;
  onClose: () => void;
  children?: ReactNode;
}

export const Modal: FC<ModalProps> = ({
  title,
  subTitle,
  onClose,
  children,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);

  const handleCrossKeyDownClick = (e: KeyboardEvent<SVGElement>) => {
    if (e.code === 'Enter') onClose();
  };

  return (
    <>
      <ModalBg onClick={onClose} />
      <ModalWrapper>
        {title && <Header>{title}</Header>}
        {subTitle && <SubHeader>{subTitle}</SubHeader>}
        <Cross
          onClick={onClose}
          onKeyDown={(e) => handleCrossKeyDownClick(e)}
          tabIndex={0}
          data-testid="modalCross"
        />
        {children}
      </ModalWrapper>
    </>
  );
};
