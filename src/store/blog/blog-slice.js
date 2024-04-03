import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { config } from '../../core/config';

export const loadBlog = createAsyncThunk('@@blog/loadBlog', async (_, {rejectWithValue}) => {
  try {
    const res = await fetch(`${config.api.host}/blog`)
    const data = await res.json()
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

const blogSlice = createSlice({
  name: '@@blog',
  initialState: {
    article: {},
    articles: [],
    isLoading: false,
    isError: false
  },
  reducers: {
    addArticle: (state, action) => {
      state.article = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadBlog.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(loadBlog.fulfilled, (state, action) => {
      state.articles = action.payload
      state.isLoading = false
      state.isError = false
    })
    builder.addCase(loadBlog.rejected, (state) => {
      state.isLoading = false
      state.isError = true
    })
  }
})

export const { addArticle } = blogSlice.actions
export const blogReducer = blogSlice.reducer