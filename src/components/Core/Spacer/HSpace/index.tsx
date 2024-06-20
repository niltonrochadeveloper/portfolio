import styles from './HSpace.module.scss'

const HSpace = ({width, height = 4, color, borderRadius, mobile = null}:{width: string | number, height?: string | number, color?: 'red' | 'green', borderRadius?: string | number, mobile?: boolean | null}) => {

    return (
        <div className={mobile === null ? '' : mobile ? 'mobile' : 'desktop'} style={{width,  height, color, borderRadius}} />
    )
};

export default HSpace;