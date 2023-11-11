import { CSSProperties } from 'react'
import styles from './HStack.module.scss'

const HStack = ({children, space, className = "", style, mobile = null}: {children: React.ReactNode, space?: number | null, className?: string, style?: CSSProperties, mobile?: boolean | null}) => {

    var styled = {
        gap: style?.gap ? style.gap : space === null ? 0 : space,
        ...style
    }

    return (
        <div className={mobile === null ? '' : mobile === null ? '' : mobile ? 'mobile' : 'desktop'}>
            <div className={`${styles.container} ${className}`} style={styled}>
                {children}
            </div>
        </div>
    )

}

export default HStack