import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projectSize: '',
  projectStyle: '',
  startProject: '',
}

const priceSlice = createSlice({
  name: '@@price',
  initialState,
  reducers: {
    getProjectSize: (state, action) => {
      state.projectSize = action.payload
    },
    getProjectStyle: (state, action) => {
      state.projectStyle = action.payload
    },
    getStartProject: (state, action) => {
      state.startProject = action.payload
    },
    resetStatePrice: () => initialState
  }
})

export const {getProjectSize, getProjectStyle, getStartProject, resetStatePrice} = priceSlice.actions
export const priceReducer = priceSlice.reducer