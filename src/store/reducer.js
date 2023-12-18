import { combineReducers } from "redux";
import { modalReducer } from "./modal/modal-slice";
import { calcReducer } from "./calc/calc-slice";
import { priceReducer } from './price/price-slice';

export const rootReducer = combineReducers({
  modal: modalReducer,
  price: priceReducer,
  calc: calcReducer,
})