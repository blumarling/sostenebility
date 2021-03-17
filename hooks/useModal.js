import { useState } from 'react'
import ReactDOM from 'react-dom'
import ModalCompoSelector from "../editor-components/ModalCompoSelector"

const useModal = () => {

  const [modalIsOpen, setModalOpen] = useState()

  return {
    openModal: () => setModalOpen(true),
    closeModal: () => setModalOpen(false),
    modalIsOpen,

  }
}

export default useModal