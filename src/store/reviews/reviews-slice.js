import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { config } from '../../core/config';

export const loadReviews = createAsyncThunk('@@reviews/loadReviews', async (_, {rejectWithValue}) => {
  try {
    const res = await fetch(`${config.api.host}/reviews`)
    const data = await res.json()
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})


const reviewsSlice = createSlice({
  name: '@@reviews',
  initialState: {
    reviews: [],
    review: {},
    isLoading: false,
    isError: false
  },
  reducers: {
    addOneReview: (state, action) => {
      state.review = action.payload
    }
  }, 
  extraReducers: (builder) => {
    builder.addCase(loadReviews.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(loadReviews.fulfilled, (state, action) => {
      state.reviews = action.payload
      state.isLoading = false
      state.isError = false
    })
    builder.addCase(loadReviews.rejected, (state) => {
      state.isLoading = false
      state.isError = true
    })
  }
})

export const { addOneReview } = reviewsSlice.actions
export const reviewsReducer = reviewsSlice.reducer