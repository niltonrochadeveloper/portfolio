

export interface ModalProps {
    children: React.ReactNode[] | React.ReactNode
    modalIsOpen: boolean
    setModalIsOpen: (isOpen: boolean) => void
    screen?: "full" | "modal"
}