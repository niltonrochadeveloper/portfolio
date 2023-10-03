import { CSSProperties } from 'react'
import styles from './HStack.module.scss'

const HStack = ({children, space = 0, style}: {children: React.ReactNode, space?: number, style?: CSSProperties}) => {

    var styled = {
        gap: style?.gap ? style.gap : space,
        ...style
    }

    return (
        <div className={styles.container} style={styled}>
            {children}
        </div>
    )

}

export default HStack