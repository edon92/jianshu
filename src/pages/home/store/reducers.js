import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  articalList: [],
  summaryMsg: [],
  currentPage: 2,
  loading: false,
  articalDetial: ''
})

export default (state= defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_ARTICAL_LIST:
      return state.set('articalList', action.data)
    case constants.CHANGE_SUMMARY_MSG:
      return state.set('summaryMsg', action.data)
    case constants.LOAD_MORE_ARTICAL:
      return state.merge({
        'articalList': state.get('articalList').concat(action.data),
        'currentPage': state.get('currentPage') + 1,
        'loading': false
      })
    case constants.SHOW_LOADING:
      return state.set('loading', action.boolean)
    default:
      return state
  }

}

