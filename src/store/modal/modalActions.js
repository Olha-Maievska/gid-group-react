export const OPEN_CALL = 'OPEN_MODAL_CALL'
export const CLOSE_CALL = 'CLOSE_MODAL_CALL'
export const OPEN_MENU = 'OPEN_MODAL_MENU'
export const CLOSE_MENU = 'CLOSE_MODAL_MENU'
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const openModalCall = () => ({type: OPEN_CALL, payload: true})
export const closeModalCall = () => ({ type: CLOSE_CALL, payload: false })
export const openModalMenu = () => ({type: OPEN_MENU, payload: true})
export const closeModalMenu = () => ({ type: CLOSE_MENU, payload: false })
export const openModal = (img) => ({type: OPEN_MODAL, payload: img})
export const closeModal = () => ({type: CLOSE_MODAL})