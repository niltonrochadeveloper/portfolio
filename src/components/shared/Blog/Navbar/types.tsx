import { Dispatch, SetStateAction } from "react";


export interface NavProps {
    showMenu: boolean;
    setShowMenu: Dispatch<SetStateAction<boolean>>
}
