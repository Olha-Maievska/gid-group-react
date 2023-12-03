import {
  ADD_STYLE,
  PRICE_FOR_STYLE,
  ADD_SQUARE,
  PRICE_FOR_SQUARE,
  ADD_HEIGHT,
  PRICE_FOR_HEIGHT,
  ADD_BATH,
  PRICE_FOR_BATH,
  ADD_DECOR,
  PRICE_FOR_DECOR,
  ADD_FLOOR,
  PRICE_FOR_FLOOR,
  ADD_DOOR,
  PRICE_FOR_DOOR,
  FINISH_PRICE,
  RESET_ALL,
  ADD_SIZE_DOOR,
} from "./calcActions"

const initialState = {
  calcStyle: '',
  calcStylePrice: 0,
  square: 0,
  squarePrice: 0,
  height: 0,
  heightPrice: 0,
  bathSquare: 0,
  bathPrice: 0,
  decor: '',
  decorPrice: 0,
  floor: '',
  floorPrice: 0,
  door: '',
  sizeDoor: '2.1',
  doorPrice: 0,
  finishPrice: 0,
}

export const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STYLE:
      return { ...state, calcStyle: action.payload }
    case PRICE_FOR_STYLE:
      return {
        ...state,
        calcStylePrice: action.payload,
        finishPrice: action.payload
      }
    case ADD_SQUARE:
      return { ...state, square: action.payload}
    case PRICE_FOR_SQUARE:
      return { ...state, squarePrice: action.payload}
    case ADD_HEIGHT:
      return { ...state, height: action.payload }
    case PRICE_FOR_HEIGHT:
      return { ...state, heightPrice: action.payload }
    case ADD_BATH:
      return { ...state, bathSquare: action.payload}
    case PRICE_FOR_BATH:
      return { ...state, bathPrice: action.payload }
    case ADD_DECOR:
      return { ...state, decor: action.payload}
    case PRICE_FOR_DECOR:
      return { ...state, decorPrice: action.payload }
    case ADD_FLOOR:
      return { ...state, floor: action.payload}
    case PRICE_FOR_FLOOR:
      return { ...state, floorPrice: action.payload }
    case ADD_DOOR:
      return { ...state, door: action.payload }
    case ADD_SIZE_DOOR:
      return { ...state, sizeDoor: action.payload}
    case PRICE_FOR_DOOR:
      return { ...state, doorPrice: action.payload }
    case FINISH_PRICE:
      return {
        ...state,
        finishPrice: state.calcStylePrice + state.squarePrice + state.heightPrice + state.bathPrice + state.decorPrice + state.floorPrice + state.doorPrice
      }
    case RESET_ALL:
      return initialState
    default:
      return state
  }
}