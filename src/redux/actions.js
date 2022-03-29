import * as types from './types'

// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  })

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) =>
  setInterval(() => {
    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } })
  }, 1000)

// INCREMENT COUNTER BY 1
export const incrementCount = (count) => ({ type: types.INCREMENT,incBy:count })

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT })

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET })

//Login User
export const loginUser = (user) => ({type:types.LOGINUSER,userName:user})

//Header Data
export const header = (headerData) => ({type:types.MENUDATA,header:headerData})

//Footer Data
export const footer = (headerData) => ({type:types.FOOTERDATA,footer:headerData})

//Breadcrumbs data
export const addBreadcrumbs = (entry) => ({type:types.BREADCRUMBS,breadcrumbsData:entry})
