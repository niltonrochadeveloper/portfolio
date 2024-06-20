import { CSSProperties } from 'react'
import styles from './VStack.module.scss'

const VStack = ({children, space, className = '', classContainer, style, mobile = null}: {children: React.ReactNode, space?: number | null, className?: string, classContainer?: string, style?: CSSProperties, mobile?: boolean | null}) => {

    var styled = {
        gap: style?.gap ? style.gap : space === null ? 0 : space,
        ...style
    }

    return (
        <div className={`${classContainer} ${mobile} === null ? '' : ${mobile} ? 'mobile' : 'desktop'`}>
            <div className={`${styles.container} ${className}`} style={styled}>
                {children}
            </div>
        </div>
    )

}

export default VStack