import styles from './Title.module.scss'
import { CSSProperties } from "react";

const Title = ({children, color, fontWeight = '400', fontSize = 18, center = false, className, style}: {children: React.ReactNode, color?: string, fontWeight?: string | number, fontSize?: number | string, center?: boolean, className?: string, style?: CSSProperties}) => {

    var styled = {
        fontWeight: style?.fontWeight ? style.fontWeight : fontWeight,
        color: style?.color ? style.color : color,
        fontSize: style?.fontSize ? style.fontSize : fontSize,
        textAlign: style?.textAlign ? style.textAlign : center ? 'center' : 'left',
        ...style
    }

    return (
        <h1 className={`${styles.container} className`} style={styled}>
            {children}
        </h1>
    )
};

export default Title;