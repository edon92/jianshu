import React, {PureComponent} from 'react'
import {actionCreators} from './store'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {
  DetailWrapper,
  Header,
  DetailInfo,
  Title,
  Author
} from './style'
import { Skeleton } from 'antd';

class Detail extends PureComponent {
  getDom() {
    const page = []
    const {articalDetial} = this.props
    if(JSON.stringify(this.props.articalDetial) !== "{}") {
      page.push(
        <div key={this.props.location.state.time}>
           <Header>
            <Title>{articalDetial.Title}</Title>
            <Author>{this.props.location.state.author} / {this.props.location.state.time}</Author>
          </Header>
          <DetailInfo dangerouslySetInnerHTML={{__html: articalDetial.Content}}>
          </DetailInfo>
        </div>
      )
      return page
    }else {
      return <div><Skeleton mountNode></Skeleton><Skeleton mountNode></Skeleton><Skeleton mountNode></Skeleton></div>
    }
  }
  render() {
    const {articalDetial} = this.props
    return (
      <DetailWrapper>
      {this.getDom()}
      </DetailWrapper>
    )
  }
  componentWillMount() {
    this.props.getAriticalDetail(this.props.location.state.url)
  }
  componentWillUnmount() {
    this.props.resetArticalDetial()
  }
}

const mapState = (state) => ({
  articalDetial: state.getIn(['detail', 'articalDetial'])
})

const mapDispatch = (dispatch) => ({
  getAriticalDetail(url) {
    dispatch(actionCreators.getLoadArticalAction(url))
  },
  resetArticalDetial() {
    dispatch(actionCreators.getResetArticalDetialAction())
  }
})

export default connect(mapState,mapDispatch)(withRouter(Detail))