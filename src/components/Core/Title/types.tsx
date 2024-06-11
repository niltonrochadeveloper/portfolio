import { CSSProperties, HTMLAttributes } from "react";

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  color?: string;
  fontWeight?: string | number;
  fontSize?: number | string;
  center?: boolean;
  className?: string;
  style?: CSSProperties;
}
