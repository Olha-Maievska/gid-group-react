import { createSlice } from '@reduxjs/toolkit'

const reviewsSlice = createSlice({
  name: '@@reviews',
  initialState: {
    review: {},
  },
  reducers: {
    addOneReview: (state, action) => {
      state.review = action.payload
    }
  }
})

export const { addOneReview } = reviewsSlice.actions
export const reviewsReducer = reviewsSlice.reducer