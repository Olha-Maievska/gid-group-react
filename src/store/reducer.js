import { combineReducers } from "redux"
import { modalReducer } from "./modal/modal-slice"
import { calcReducer } from "./calc/calc-slice"
import { priceReducer } from './price/price-slice'
import { projectsReducer } from './projects/projects-slice'
import { reviewsReducer } from './reviews/reviews-slice'
import { blogReducer } from './blog/blog-slice'

export const rootReducer = combineReducers({
  modal: modalReducer,
  price: priceReducer,
  calc: calcReducer,
  projects: projectsReducer,
  blog: blogReducer,
  reviews: reviewsReducer,
})