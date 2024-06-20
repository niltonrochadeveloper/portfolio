import styles from './VSpace.module.scss'

const VSpace = ({width = '100%', height, color, borderRadius, mobile = null}:{width?: string | number, height: string | number, color?: 'red' | 'green', borderRadius?: string | number, mobile?: boolean | null }) => {

    return (
        <div className={mobile === null ? '' : mobile ? 'mobile' : 'desktop'} style={{width,  height, color, borderRadius}} />
    )
};

export default VSpace;