import { combineReducers } from "redux";
import { calcReducer } from "./calc/calcReducer";
import { modalReducer } from "./modal/modalReducer";
import { priceReducer } from './price/priceReducer';

export const rootReducer = combineReducers({
  modal: modalReducer,
  calc: calcReducer,
  price: priceReducer,
})