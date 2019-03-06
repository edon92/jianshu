import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage:1
})

export default (state = defaultState, action) => {
  if(action.type === constants.CLICK_INPUT) {
    return state.set('focused', true)
  }
  if(action.type === constants.BLUR_INPUT) {
    return state.set('focused', false)
  }
  if(action.type === constants.MOUSE_ENTER) {
    return state.set('mouseIn', true)
  }
  if(action.type === constants.MOUSE_LEAVE) {
    return state.set('mouseIn', false)
  }
  if(action.type === constants.CHANGE_LIST) {
    return state.merge({
      list: action.list,
      page: action.page,
      totalPage: action.totalPage
    })
  }
  if(action.type === constants.SWITCH_ITEM) {
    if(action.page < action.totalPage) {
      return state.set('page', action.page + 1)
    }else {
      return state.set('page', 1)
    }
  }
  return state
}