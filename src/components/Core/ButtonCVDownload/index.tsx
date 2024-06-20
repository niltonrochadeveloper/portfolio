"use client";

import { ButtonCVDownloadProps } from "./types";
import StyledButton from "../Button/styles";

const ButtonCVDownload: React.FC<ButtonCVDownloadProps> = ({
  children,
  url,
  target,
}) => {
  return (
    <a href={url} target={target}>
      <StyledButton>{children}</StyledButton>
    </a>
  );
};

export default ButtonCVDownload;
