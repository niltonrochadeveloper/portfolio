import { CSSProperties } from 'react'
import styles from './VStack.module.scss'

const VStack = ({children, space}: {children: React.ReactNode, space?: number}) => {

     const style = {
        gap: space ?? 0
    }

    return (
        <div className={styles.container} style={style}>
            {children}
        </div>
    )

}

export default VStack