import { CSSProperties } from 'react'
import styles from './VStack.module.scss'

const VStack = ({children, space = 0, style}: {children: React.ReactNode, space?: number, style?: CSSProperties}) => {

    var styled = {
        gap: style?.gap ? style.gap : space,
        ...style
    }

    return (
        <div className={styles.container} style={style}>
            {children}
        </div>
    )

}

export default VStack