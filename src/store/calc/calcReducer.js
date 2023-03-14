import { ADD_STYLE_PRICE, ADD_FINISH_PRICE } from "./calcActions"

const initialState = {
  calcStylePrice: 0,
  finishPrice: 0
}

export const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STYLE_PRICE:
      return { ...state, calcStylePrice: action.payload }
    case ADD_FINISH_PRICE:
      return {...state, finishPrice: state.finishPrice + state.calcStylePrice}
    default:
      return state
  }
}