import { CSSProperties } from 'react'
import styles from './VStack.module.scss'

const VStack = ({children, space = 0, className = '', style}: {children: React.ReactNode, space?: number, className?: string, style?: CSSProperties}) => {

    var styled = {
        gap: style?.gap ? style.gap : space,
        ...style
    }

    return (
        <div className={`${className}`}>
            <div className={`${styles.container} className`} style={styled}>
                {children}
            </div>
        </div>
    )

}

export default VStack