import { GET_PROJECT_SIZE, GET_PROJECT_STYLE, GET_START_PROJECT, RESET_STATE_PRICE } from './priceActions';

const initialState = {
  projectSize: '',
  projectStyle: '',
  startProject: '',
}

export const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_SIZE:
      return {...state, projectSize: action.payload}
    case GET_PROJECT_STYLE:
      return { ...state, projectStyle: action.payload }
    case GET_START_PROJECT: 
      return { ...state, startProject: action.payload }
    case RESET_STATE_PRICE: 
      return initialState
    default:
      return state
  }
}