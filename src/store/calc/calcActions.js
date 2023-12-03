export const ADD_STYLE = 'ADD_STYLE'
export const PRICE_FOR_STYLE = 'PRICE_FOR_STYLE'
export const ADD_SQUARE = 'ADD_SQUARE'
export const PRICE_FOR_SQUARE = 'PRICE_FOR_SQUARE'
export const ADD_HEIGHT = 'ADD_HEIGHT'
export const PRICE_FOR_HEIGHT = 'PRICE_FOR_HEIGHT'
export const ADD_BATH = 'ADD_BATH'
export const PRICE_FOR_BATH = 'PRICE_FOR_BATH'
export const ADD_DECOR = 'ADD_DECOR'
export const PRICE_FOR_DECOR = 'PRICE_FOR_DECOR'
export const ADD_FLOOR = 'ADD_FLOOR'
export const PRICE_FOR_FLOOR = 'PRICE_FOR_FLOOR'
export const ADD_DOOR = 'ADD_DOOR'
export const ADD_SIZE_DOOR = 'ADD_SIZE_DOOR'
export const PRICE_FOR_DOOR = 'PRICE_FOR_DOOR'
export const FINISH_PRICE = 'FINISH_PRICE'
export const RESET_ALL = 'RESET_ALL'

export const addStyle = (style) => ({type: ADD_STYLE, payload: style})
export const addStylePrice = (price) => ({type: PRICE_FOR_STYLE, payload: price})
export const addSquare = (square) => ({type: ADD_SQUARE, payload: square})
export const addSquarePrice = (squarePrice) => ({type: PRICE_FOR_SQUARE, payload: squarePrice})
export const addHeight = (height) => ({type: ADD_HEIGHT, payload: height})
export const addHeightPrice = (heightPrice) => ({type: PRICE_FOR_HEIGHT, payload: heightPrice})
export const addBathSquare = (bathSquare) => ({type: ADD_BATH, payload: bathSquare})
export const addBathPrice = (bathPrice) => ({type: PRICE_FOR_BATH, payload: bathPrice})
export const addDecor = (decor) => ({type: ADD_DECOR, payload: decor})
export const addDecorPrice = (decorPrice) => ({type: PRICE_FOR_DECOR, payload: decorPrice})
export const addFloor = (floor) => ({type: ADD_FLOOR, payload: floor})
export const addFloorPrice = (floorPrice) => ({type: PRICE_FOR_FLOOR, payload: floorPrice})
export const addDoor = (door) => ({ type: ADD_DOOR, payload: door })
export const addSizeDoor = (size) => ({type: ADD_SIZE_DOOR, payload: size})
export const addDoorPrice = (doorPrice) => ({type: PRICE_FOR_DOOR, payload: doorPrice})
export const resetAll = {type: RESET_ALL}
export const addFinishPrice = { type: FINISH_PRICE }
