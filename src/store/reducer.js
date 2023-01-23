import { combineReducers } from "redux";

import { modalReducer } from "./modal/modalReducer";

export const reducer = combineReducers({
  modal: modalReducer,
})