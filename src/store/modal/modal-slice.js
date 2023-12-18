import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: '@@modal',
  initialState: {
    menu: false,
    modal: false,
    modalSrc: null,
  },
  reducers: {
    openModalMenu: (state) => {
      state.menu = true
    },
    closeModalMenu: (state) => {
      state.menu = false
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