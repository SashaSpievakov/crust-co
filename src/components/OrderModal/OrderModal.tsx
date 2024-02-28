import { FC, KeyboardEvent, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ModalBg } from 'src/styles/Base.styled';

import { SuccessModal } from '../SuccessModal';
import { Input } from '../UI';
import {
  Aricle,
  Cross,
  Form,
  Header,
  ModalButton,
  SubHeader,
} from './OrderModal.styled';

interface OrderModalProps {
  setIsOpen: (value: boolean) => void;
}

interface FormValues {
  name: string;
  phone: string;
  city: string;
  address?: string;
}

export const OrderModal: FC<OrderModalProps> = ({ setIsOpen }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);

  const onSubmit: SubmitHandler<FormValues> = () => {
    setIsSubmitted(true);
  };

  const handleCrossKeyDownClick = (e: KeyboardEvent<SVGElement>) => {
    if (e.code === 'Enter') setIsOpen(false);
  };

  return !isSubmitted ? (
    <>
      <ModalBg onClick={() => setIsOpen(false)} />
      <Aricle>
        <Header>Order</Header>
        <SubHeader>
          Please provide your information, and our operator will get in touch
          with you as soon as possible to finish your order
        </SubHeader>
        <Cross
          onClick={() => setIsOpen(false)}
          onKeyDown={(e) => handleCrossKeyDownClick(e)}
          tabIndex={0}
          data-testid="modalCross"
        />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="inputName"
            label="Name"
            {...register('name', { required: true })}
            error={errors.name && 'This field is required'}
          />

          <Input
            id="inputPhone"
            label="Phone Number"
            type="number"
            {...register('phone', {
              required: {
                value: true,
                message: 'This field is required',
              },
              maxLength: {
                value: 10,
                message: 'The phone number should have 10 characters',
              },
              minLength: {
                value: 10,
                message: 'The phone number should have 10 characters',
              },
            })}
            error={errors.phone && errors.phone.message}
          />

          <Input
            id="inputCity"
            label="City"
            {...register('city', { required: true })}
            error={errors.city && 'This field is required'}
          />

          <Input
            id="inputAdddress"
            label="Adddress (optional)"
            {...register('address')}
          />

          <ModalButton type="submit">
            <span>Send</span>
          </ModalButton>
        </Form>
      </Aricle>
    </>
  ) : (
    <SuccessModal setIsOpen={setIsOpen} />
  );
};
