import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: '@@modal',
  initialState: {
    menu: false,
    menuClass: '',
    modal: false,
    modalSrc: null,
  },
  reducers: {
    openModalMenu: (state, { payload }) => {
      state.menu = true
      state.menuClass = payload
    },
    closeModalMenu: (state, { payload }) => {
      state.menu = false
      state.menuClass = payload
    },
    openModal: (state, action) => {
      state.modal = true
      state.modalSrc = action?.payload
    },
    closeModal: (state) => {
      state.modal = false
    }
  }
})

export const { openModalMenu, closeModalMenu, openModal, closeModal } = modalSlice.actions

export const modalReducer = modalSlice.reducer