import { OPEN_CALL, CLOSE_CALL, OPEN_MENU, CLOSE_MENU, OPEN_MODAL, CLOSE_MODAL } from "./modalActions"

const initialState = {
  call: false,
  menu: false,
  modal: false,
  modalSrc: null
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CALL:
      return {...state, menu: false, call: action.payload}
    case CLOSE_CALL:
      return { ...state, call: action.payload }
    case OPEN_MENU:
      return {...state, menu: action.payload}
    case CLOSE_MENU:
      return { ...state, menu: action.payload }
    case OPEN_MODAL:
      return {...state, modal: true, modalSrc: action.payload}
    case CLOSE_MODAL:
      return {...state, modal: false}
    default:
      return state
  }
}