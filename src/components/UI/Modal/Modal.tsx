import { useForm } from 'react-hook-form';

import {
  Bg,
  Aricle,
  Header,
  SubHeader,
  Form,
  Group,
  Label,
  Input,
} from './Modal.styled';

interface ModalProps {
  setIsOpen: (value: boolean) => void;
}

const Modal = ({ setIsOpen }: ModalProps) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Bg onClick={() => setIsOpen(false)} />
      <Aricle>
        <Header>Order</Header>
        <SubHeader>
          Please provide your information, and our operator will get in touch
          with you as soon as possible to finish your order
        </SubHeader>
        <Form>
          <Group>
            <Label htmlFor="inputName">Name</Label>
            <Input id="inputName" {...register('example')} />
          </Group>

          <Group>
            <Label htmlFor="inputPhone">Phone Number</Label>
            <Input
              id="inputPhone"
              {...register('exampleRequired', { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </Group>

          <Group>
            <Label htmlFor="inputCity">City</Label>
            <Input
              id="inputCity"
              {...register('exampleRequired', { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </Group>

          <Group>
            <Label htmlFor="inputAdddress">Adddress (optional)</Label>
            <Input
              id="inputAdddress"
              {...register('exampleRequired', { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </Group>
        </Form>
      </Aricle>
    </>
  );
};
export default Modal;
