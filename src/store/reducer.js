import { combineReducers } from "redux";
import { calcReducer } from "./calc/calcReducer";
import { modalReducer } from "./modal/modalReducer";

export const reducer = combineReducers({
  modal: modalReducer,
  calc: calcReducer,
})