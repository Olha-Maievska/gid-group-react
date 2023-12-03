export const OPEN_MENU = 'OPEN_MODAL_MENU'
export const CLOSE_MENU = 'CLOSE_MODAL_MENU'
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const openModalMenu = () => ({type: OPEN_MENU, payload: true})
export const closeModalMenu = () => ({ type: CLOSE_MENU, payload: false })
export const openModal = (img = null) => ({type: OPEN_MODAL, payload: img})
export const closeModal = { type: CLOSE_MODAL }
