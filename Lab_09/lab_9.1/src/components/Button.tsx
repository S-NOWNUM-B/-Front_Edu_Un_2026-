import { memo } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export const Button = memo(function Button({ onClick, label }: ButtonProps) {
  console.log(`Button "${label}" render`);
  return <button onClick={onClick}>{label}</button>;
});