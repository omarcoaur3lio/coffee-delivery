import { ButtonContainer } from "./styles";

interface ButtonProps {
  title: string;
  handleOnClick?: () => void;
  variant: "primary" | "secondary";
  children?: React.ReactNode;
}

export function Button({ title, handleOnClick, variant, children }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} onClick={() => handleOnClick}>
      { variant === "secondary" && children}
      {title}
    </ButtonContainer>
  )
}