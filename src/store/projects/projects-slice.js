import { createSlice } from '@reduxjs/toolkit'

const projectsSlice = createSlice({
  name: '@@projects',
  initialState: {
    project: {}
  },
  reducers: {
    addOneProject: (state, action) => {
      state.project = action.payload
    }
  }
})

export const { addOneProject } = projectsSlice.actions

export const projectsReducer = projectsSlice.reducer