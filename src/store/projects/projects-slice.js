import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { config } from '../../core/config';

export const loadProjects = createAsyncThunk('@@projects/loadProjects', async (_, {rejectWithValue}) => {
  try {
    const res = await fetch(`${config.api.host}/projects`)
    const data = await res.json()
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

const projectsSlice = createSlice({
  name: '@@projects',
  initialState: {
    projects: [],
    project: {},
    isLoading: false,
    isError: false
  },
  reducers: {
    addOneProject: (state, action) => {
      state.project = action.payload
    }
  }, 
  extraReducers: (builder) => {
    builder.addCase(loadProjects.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(loadProjects.fulfilled, (state, action) => {
      state.projects = action.payload
      state.isLoading = false
      state.isError = false
    })
    builder.addCase(loadProjects.rejected, (state) => {
      state.isLoading = false
      state.isError = true
    })
  }
})

export const { addOneProject } = projectsSlice.actions

export const projectsReducer = projectsSlice.reducer