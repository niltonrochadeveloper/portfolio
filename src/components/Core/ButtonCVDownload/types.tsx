import { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { ButtonProps } from "../Button/types";

export interface ButtonCVDownloadProps
  extends HTMLAttributes<HTMLAnchorElement> {
  url: string;
  target: "_blank";
}
