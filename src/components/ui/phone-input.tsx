import InputMask from 'react-input-mask';

interface PhoneInputProps {
  name: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

export default function PhoneInput({ name, required, placeholder, className }: PhoneInputProps) {
  return (
    <InputMask
      mask="+7 (999) 999-99-99"
      type="tel"
      name={name}
      required={required}
      placeholder={placeholder || "+7 (___) ___-__-__"}
      className={className}
    />
  );
}