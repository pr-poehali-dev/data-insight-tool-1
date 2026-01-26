import { useState, ChangeEvent } from 'react';

interface PhoneInputProps {
  name: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

export default function PhoneInput({ name, required, placeholder, className }: PhoneInputProps) {
  const [value, setValue] = useState('');

  const formatPhoneNumber = (input: string): string => {
    const digits = input.replace(/\D/g, '');
    
    if (digits.length === 0) return '';
    if (digits.length <= 1) return `+7 (${digits}`;
    if (digits.length <= 4) return `+7 (${digits.slice(1)}`;
    if (digits.length <= 7) return `+7 (${digits.slice(1, 4)}) ${digits.slice(4)}`;
    if (digits.length <= 9) return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formatted = formatPhoneNumber(input);
    setValue(formatted);
  };

  return (
    <input
      type="tel"
      name={name}
      value={value}
      onChange={handleChange}
      required={required}
      placeholder={placeholder || "+7 (___) ___-__-__"}
      className={className}
    />
  );
}