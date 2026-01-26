import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

interface PhoneInputProps {
  name: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>((props, ref) => {
  return (
    <IMaskInput
      {...props}
      mask="+7 (000) 000-00-00"
      unmask={false}
      inputRef={ref}
      type="tel"
    />
  );
});

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
