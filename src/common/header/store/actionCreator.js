import * as types from './constants'
import axios from 'axios'
import { fromJS } from 'immutable';

const changeList = (list,page,totalPage) => ({
  type: types.CHANGE_LIST,
  list,
  page,
  totalPage
})

export const getInputClickAction = () => ({
  type: types.CLICK_INPUT
})

export const getInputBlurAction = () => ({
  type: types.BLUR_INPUT
})

export const getHostListAction = () => {
  return (dispatch) => {
    axios.get('/api/hotList.json').then((res) => {
      const newList = fromJS(res.data.data)
      const totalPage = Math.ceil(newList.size / 10)
      dispatch(changeList(newList, 1, totalPage))
    }).catch((error) => {
      console.log(error)
    })
  }
}

export const getMouseEnterAction = () => ({
  type: types.MOUSE_ENTER
})

export const getMouseLeaveAction = () => ({
  type: types.MOUSE_LEAVE
})

export const getSwitchItemAction = (page, totalPage) => ({
  type: types.SWITCH_ITEM,
  page,
  totalPage
})