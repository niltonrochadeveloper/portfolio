import styles from "./Title.module.scss";
import { CSSProperties } from "react";

const SubTitle = ({
  children,
  color,
  fontWeight = "400",
  fontSize = 14,
  center,
  className,
  style,
}: {
  children: React.ReactNode;
  color?: string;
  fontWeight?: string | number;
  fontSize?: number | string;
  center?: string | boolean;
  className?: string;
  style?: CSSProperties;
}) => {
  var styled = {
    fontWeight: style?.fontWeight ? style.fontWeight : fontWeight,
    color: style?.color ? style.color : color,
    fontSize: style?.fontSize ? style.fontSize : fontSize,
    textAlign: style?.textAlign ? style.textAlign : center ? "center" : "left",
    ...style,
  };

  var container = `${styles.container} ${className}`;

  return (
    <h1 className={container} style={styled}>
      {children}
    </h1>
  );
};

export default SubTitle;
