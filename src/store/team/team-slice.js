import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { config } from '../../core/config';

export const loadTeam = createAsyncThunk('@@team/loadTeam', async (_, {rejectWithValue}) => {
  try {
    const res = await fetch(`${config.api.host}/team`)
    const data = await res.json()
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

const teamSlice = createSlice({
  name: '@@team',
  initialState: {
    list: [],
    isLoading: false,
    isError: false
  },
  extraReducers: (builder) => {
    builder.addCase(loadTeam.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(loadTeam.fulfilled, (state, action) => {
      state.list = action.payload
      state.isLoading = false
      state.isError = false
    })
    builder.addCase(loadTeam.rejected, (state) => {
      state.isLoading = false
      state.isError = true
    })
  }
})

export const teamReducer = teamSlice.reducer