import { useDispatch, useSelector } from 'react-redux'
import { addModal, removeModal } from '../redux/modals/actions'
import { selectActiveModals } from '../redux/modals/selectors'

const useModal = () => {

  const dispatch = useDispatch()
  const activeModals = useSelector(selectActiveModals)  
  const isAlertModalOpen = activeModals.find(item => item.type === 'alert')
  const isHomeModalOpen = activeModals.find(item => item.type === 'home')

  const openModal = (customModal) => dispatch(addModal(customModal))
  const closeModal = (customModal) => dispatch(removeModal(customModal))

  return {
    openModal,
    closeModal,
    activeModals,
    isAlertModalOpen,
    isHomeModalOpen
  }
}

export default useModal