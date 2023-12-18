import { createSlice } from '@reduxjs/toolkit'

const priceSlice = createSlice({
  name: '@@price',
  initialState: {
    projectSize: '',
    projectStyle: '',
    startProject: '',
  },
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
    resetStatePrice: (state) => {
      state.projectSize = ''
      state.projectStyle = ''
      state.startProject = ''
    }
  }
})

export const {getProjectSize, getProjectStyle, getStartProject, resetStatePrice} = priceSlice.actions
export const priceReducer = priceSlice.reducer