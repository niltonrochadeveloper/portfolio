import { HStack, VStack } from "@/components/Core"
import { NavBar } from "../"

import styles from './Menu.module.scss'

const Menu = ({mobile = null}: {mobile?: boolean | null}) => {

    return (
        <div className="mobile">
            <div className={`${styles.container}`} >
                <NavBar />
            </div>
        </div>
    )
}

export default Menu