import { combineReducers } from 'redux'
import * as types from './types'


const loginState = {
    user:''
}

const loginReducer = (state=loginState,{type,userName}) => {
    switch (type) {
        case types.LOGINUSER:
            var loginSta = {...state, user:userName}
            console.log("######### loginSta", loginSta);
            return loginSta;
        default:
            return state
    }

}

// COUNTER REDUCER
const counterReducer = (state = 0, { type,incBy }) => {
  switch (type) {
    case types.INCREMENT:
      return state + incBy
    case types.DECREMENT:
      return state - 1
    case types.RESET:
      return 0
    default:
      return state
  }
}

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
}

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      }
    default:
      return state
  }
}


// INITIAL Header,Footer STATE
const layoutState = {
  headerData: {},
  footerData: {},
}

const headerFooterReducer = (state=layoutState,{type,header,footer}) => {
  switch (type) {
      case types.MENUDATA:
          var menuData = {...state, headerData:header}
          console.log("### Redux ### Redux ### Redux menuData", menuData);
          return menuData;
      case types.FOOTERDATA:
          var footerData = {...state, footerData:footer}
          console.log("### Redux ### Redux ### Redux menuData", footerData);
          return footerData;
      default:
          return state
  }

}

//initial breadcrumbs data
const breadCrumbsState= {crumbs:[]}
const breadCrumbsReducer = (state=breadCrumbsState,{type,breadcrumbsData}) => {
  switch (type) {
      case types.BREADCRUMBS:
          let crumbsArr = state.crumbs
          var crumbsData = [...crumbsArr, breadcrumbsData]
          state.crumbs = crumbsData;
          console.log("### Redux ### Redux ### Redux breadCrumbs Data", crumbsData);
          return state;
      default:
          return state
  }
}


// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
  login: loginReducer,
  headerfooter: headerFooterReducer,
  breadCrumbs: breadCrumbsReducer
}

export default combineReducers(reducers)
