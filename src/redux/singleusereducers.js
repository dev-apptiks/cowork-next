import { combineReducers } from 'redux'
import * as types from './types'

// initial breadcrumbs data

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
  breadCrumbs: breadCrumbsReducer
}

export default combineReducers(reducers)
