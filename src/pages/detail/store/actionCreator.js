import * as types from './constants'
import axios from 'axios'

const changDetail = (data) => ({
  type:  types.LOAD_ARTICAL_DETAIL,
  data
})

export const getLoadArticalAction = (url) => {
  return dispatch => {
    let params = new URLSearchParams();
    params.append('appkey', 'EBC3AZ5XCAYY');
    params.append('url', url);
    params.append('contentwithhtml', true);
    axios.post('https://api.gugudata.com/news/fetchcontent', params).then(res => {
      dispatch(changDetail(res.data.Data))
    }).catch((err) => {
      console.log(err)
    })
  }
}
export const getResetArticalDetialAction = () => ({
  type: types.RESET_ARTICALDETAIL
})