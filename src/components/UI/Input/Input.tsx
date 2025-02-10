import { forwardRef, HTMLInputTypeAttribute, KeyboardEvent } from 'react';
import { ChangeHandler } from 'react-hook-form';

import { Group, Label, StyledInput } from './Input.styled';

interface InputProps {
  id: string;
  name?: string;
  type?: HTMLInputTypeAttribute | undefined;
  onChange?: ChangeHandler | (() => void);
  onBlur?: ChangeHandler | (() => void);
  label?: string;
  error?: undefined | string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, type, onChange, onBlur, label, error }, ref) => {
    const handlePhoneInputKeyDownClick = (
      e: KeyboardEvent<HTMLInputElement>,
    ) => {
      if (type === 'number' && (e.key === 'e' || e.key === '-')) {
        e.preventDefault();
      }
    };

    return (
      <Group>
        {label && <Label htmlFor={id}>{label}</Label>}

        <StyledInput
          id={id}
          name={name}
          type={type}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          onKeyPress={(e) => handlePhoneInputKeyDownClick(e)}
        />

        {error && <span>{error}</span>}
      </Group>
    );
  },
);

Input.displayName = 'Input';
