"use client";

import { TitleProps } from "./types";
import StyledTitle from "./styles";

const Title: React.FC<TitleProps> = ({
  children,
  color,
  fontWeight = "400",
  fontSize = 18,
  center = false,
  className,
  style,
}) => {
  var styled = {
    fontWeight: style?.fontWeight ? style.fontWeight : fontWeight,
    color: style?.color ? style.color : color,
    fontSize: style?.fontSize ? style.fontSize : fontSize,
    textAlign: style?.textAlign ? style.textAlign : center ? "center" : "left",
    ...style,
  };

  return <StyledTitle style={styled}>{children}</StyledTitle>;
};

export default Title;
