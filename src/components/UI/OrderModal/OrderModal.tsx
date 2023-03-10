import { KeyboardEvent, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { ModalBg } from 'src/styles/Base.styled';
import SuccessModal from '../SuccessModal/SuccessModal';
import {
  Aricle,
  Header,
  SubHeader,
  Cross,
  Form,
  Group,
  Label,
  Input,
  ModalButton,
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

const OrderModal = ({ setIsOpen }: OrderModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = () => {
    setIsSubmitted(true);
  };

  const handlePhoneInputKeyDownClick = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'e' || e.key === '-') {
      e.preventDefault();
    }
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
          <Group>
            <Label htmlFor="inputName">Name</Label>
            <Input id="inputName" {...register('name', { required: true })} />
            {errors.name && <span>This field is required</span>}
          </Group>

          <Group>
            <Label htmlFor="inputPhone">Phone Number</Label>
            <Input
              id="inputPhone"
              type="number"
              onKeyPress={(e) => handlePhoneInputKeyDownClick(e)}
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
            />
            {errors.phone && <span>{errors.phone.message}</span>}
          </Group>

          <Group>
            <Label htmlFor="inputCity">City</Label>
            <Input id="inputCity" {...register('city', { required: true })} />
            {errors.city && <span>This field is required</span>}
          </Group>

          <Group>
            <Label htmlFor="inputAdddress">Adddress (optional)</Label>
            <Input id="inputAdddress" {...register('address')} />
          </Group>

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
export default OrderModal;