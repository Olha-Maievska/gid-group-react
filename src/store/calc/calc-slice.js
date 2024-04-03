import { createSlice } from '@reduxjs/toolkit'

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

const calcSlice = createSlice({
  name: '@@calc',
  initialState,
  reducers: {
    addStyle: (state, action) => {
      state.calcStyle = action.payload
    },
    addStylePrice: (state, action) => { 
      state.calcStylePrice = action.payload
    },
    addSquare: (state, action) => {
      state.square = action.payload
    },
    addSquarePrice: (state, action) => {
      state.squarePrice = action.payload
    },
    addHeight: (state, action) => {
      state.height = action.payload
    },
    addHeightPrice: (state, action) => {
      state.heightPrice = action.payload
    },
    addBathSquare: (state, action) => {
      state.bathSquare = action.payload
    },
    addBathPrice: (state, action) => {
      state.bathPrice = action.payload
    },
    addDecor: (state, action) => {
      state.decor = action.payload
    },
    addDecorPrice: (state, action) => {
      state.decorPrice = action.payload
    },
    addFloor: (state, action) => {
      state.floor = action.payload
    },
    addFloorPrice: (state, action) => {
      state.floorPrice = action.payload
    },
    addDoor: (state, action) => {
      state.door = action.payload
    },
    addSizeDoor: (state, action) => {
      state.sizeDoor = action.payload
    },
    addDoorPrice: (state, action) => {
      state.doorPrice = action.payload
    },
    resetAll: () => initialState,
    addFinishPrice: (state) => {
      state.finishPrice = Math.ceil(state.calcStylePrice + state.squarePrice + state.heightPrice + state.bathPrice + state.decorPrice + state.floorPrice + state.doorPrice)
    }
  }
})

export const {
  addStyle,
  addStylePrice,
  addSquare,
  addSquarePrice,
  addHeight,
  addHeightPrice,
  addBathSquare,
  addBathPrice,
  addDecor,
  addDecorPrice,
  addFloor,
  addFloorPrice,
  addDoor,
  addDoorPrice,
  addSizeDoor,
  resetAll,
  addFinishPrice
} = calcSlice.actions

export const calcReducer = calcSlice.reducer