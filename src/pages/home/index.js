import React, {Component} from 'react'
import Banner from './component/banner'
import ArticalList from './component/articalList'
import Board from './component/board'
import Writer from './component/writer'
import {connect} from 'react-redux'
import { Spin } from 'antd'
import {
  HomeWrapper,
  Main,
  Aside,
  LoadingWrapper
} from './style'

class Home extends Component {
  showLoading() {
    const {loading} = this.props
    if(loading) {
      return (
        <LoadingWrapper>
          <Spin tip="Loading..."></Spin>
        </LoadingWrapper>
      )
    }else {
      return null
    }
  }
  render() {
    return (
      <HomeWrapper>
        <Main>
          <Banner></Banner>
          <ArticalList>
          </ArticalList>
          {this.showLoading()}
        </Main>
        <Aside>
          <Board></Board>
          <Writer></Writer>
        </Aside>
      </HomeWrapper>
      // <div>https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg%3FimageMogr2/auto-orient/strip%7CimageView2/1/w/1250/h/540</div>
    )
  }
}
const mapState = (state) => ({
  loading: state.getIn(['home', 'loading'])
})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState,mapDispatch)(Home)