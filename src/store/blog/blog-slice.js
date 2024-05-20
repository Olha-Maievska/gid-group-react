import { createSlice } from '@reduxjs/toolkit'

const blogSlice = createSlice({
  name: '@@blog',
  initialState: {
    article: {},
  },
  reducers: {
    addArticle: (state, action) => {
      state.article = action.payload
    },
  }
})

export const { addArticle } = blogSlice.actions
export const blogReducer = blogSlice.reducer