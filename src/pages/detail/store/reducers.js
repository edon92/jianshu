import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  articalDetial: {}
})

export default (state= defaultState, action) => {
  switch (action.type) {
    case constants.LOAD_ARTICAL_DETAIL:
      return state.set('articalDetial', action.data)
    case constants.RESET_ARTICALDETAIL:
      return state.set('articalDetial', fromJS({}))
    default:
      return state
  }
}

