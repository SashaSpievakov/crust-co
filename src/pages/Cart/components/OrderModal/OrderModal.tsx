import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Input, Modal } from '../../../../components/UI';
import { CloseButton, Form, ModalButton } from './OrderModal.styled';

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

  const onSubmit: SubmitHandler<FormValues> = () => {
    setIsSubmitted(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return !isSubmitted ? (
    <Modal
      title="Order"
      subTitle="Please provide your information, and our operator will get in touch
          with you as soon as possible to finish your order"
      onClose={onClose}
    >
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
    </Modal>
  ) : (
    <Modal
      title="Thank you for your order!"
      subTitle="Our operator will give you a call in a few minutes"
      onClose={onClose}
    >
      <CloseButton onClick={onClose}>Close</CloseButton>
    </Modal>
  );
};
