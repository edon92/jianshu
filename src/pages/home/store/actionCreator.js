import * as types from './constants'
import axios from 'axios'
import { fromJS } from 'immutable';

const changeArticalList = (data) => ({
  type: types.CHANGE_ARTICAL_LIST,
  data
})

const list = []

const LoadMoreArticalAction = (data) => ({
  type: types.LOAD_MORE_ARTICAL,
  data
})

export const getArticalDetail = (item) => {
  var params = new URLSearchParams();
  params.append('appkey', 'EBC3AZ5XCAYY');
  params.append('url', item.ArticleSourceUrl);
  return axios.post('https://api.gugudata.com/news/fetchcontent', params).then(res => {
    list.push(res.data.Data.Content.substr(0,75))
  })
}

export const getArticalListAction = (page) => {
  return dispatch => {
    axios.get(`https://api.gugudata.com/news/techblogs?appkey=${types.SUMMARY_APP_KEY}&pagesize=10&pageindex=${page}`)
    .then((res) => {
      let data = res.data.Data
      dispatch(changeArticalList(fromJS(data)))
    }).catch((error) => {
      console.log(error)
    })
  }
}

export const getMoreArtcalAction = (page) => {
  return dispatch => {
    axios.get(`https://api.gugudata.com/news/techblogs?appkey=${types.SUMMARY_APP_KEY}&pagesize=10&pageindex=${page}`)
    .then((res) => {
      let data = res.data.Data
      dispatch(LoadMoreArticalAction(fromJS(data)))
    }).catch((error) => {
      console.log(error)
    })
  }
}

export const getShowLoadingAction = (boolean) => ({
  type: types.SHOW_LOADING,
  boolean
})

