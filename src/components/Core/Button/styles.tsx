import styled from "styled-components";
import { ButtonProps } from "./types";

const StyledButton = styled.button<Pick<ButtonProps, "color" | "disabled">>`
  background-color: ${({ color }) =>
    color === "primary"
      ? "#2f9bf4"
      : color === "secondary"
      ? "#333"
      : "transparent"};
  height: 42px;
  width: 100%;
  color: ${({ color }) =>
    color === "primary" ? "#fff" : color === "secondary" ? "#fff" : color};
  border-radius: 50px;
  max-width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  &:hover {
    background-color: ${({ color }) =>
      color === "primary"
        ? "#2f9bf422"
        : color === "secondary"
        ? "#33333322"
        : "#ffffff55"};
  }
`;
export default StyledButton;
