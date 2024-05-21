import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: '@@modal',
  initialState: {
    menu: false,
    modal: '',
    modalSrc: null,
  },
  reducers: {
    openModalMenu: (state) => {
      state.menu = true
    },
    closeModalMenu: (state) => {
      state.menu = false
    },
    openModal: (state, {payload}) => {
      state.modal = payload.name
      state.modalSrc = payload?.imgSrc
    },
    closeModal: (state) => {
      state.modal = ''
    }
  }
})

export const { openModalMenu, closeModalMenu, openModal, closeModal } = modalSlice.actions

export const modalReducer = modalSlice.reducer