"use client";

import { ButtonProps } from "./types";
import StyledButton from "./styles";

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
