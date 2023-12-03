export const GET_PROJECT_SIZE = 'GET_PROJECT_SIZE'
export const GET_PROJECT_STYLE = 'GET_PROJECT_STYLE'
export const GET_START_PROJECT = 'GET_START_PROJECT'
export const RESET_STATE_PRICE = 'RESET_STATE_PRICE'

export const getProjectSize = (size) => ({
  type: GET_PROJECT_SIZE,
  payload: size
})

export const getProjectStyle = (style) => ({
  type: GET_PROJECT_STYLE,
  payload: style
})

export const getStartProject = (timeStart) => ({
  type: GET_START_PROJECT,
  payload: timeStart
})

export const resetStatePrice = {
  type: RESET_STATE_PRICE
}