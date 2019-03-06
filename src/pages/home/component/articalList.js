import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'
import {
  ArticalItem,
  ItemTitle,
  ItemAuthorAndTime,
  ItemTag,
  TagWrapper,
  ShowMore
} from '../style'

import Summary from './summary'


class ArticalList extends PureComponent {
  getListDom() {
    const {articalList} = this.props
    const pageList = []
    if(articalList) {
      articalList.map((item, index) => {
        pageList.push(
          <Link to={{
            pathname: '/detail',
            state: {
              url: item.get('ArticleSourceUrl'),
              author: item.get('ArticleAuthor'),
              time: item.get('CreateDateTime')
            }
          }} key={item.get('ArticleId')} style={{color: '#333'}}>
            <ArticalItem >
              <ItemAuthorAndTime>
                <span className="author">{item.get('ArticleAuthor')} / </span>
                <span className="time">{item.get('CreateDateTime')}</span>
              </ItemAuthorAndTime>
              <ItemTitle>{item.get('ArticleTitle')}</ItemTitle>
              <Summary url={item.get('ArticleSourceUrl')}></Summary>
              <TagWrapper>
                {item.get('Tags').map((tag, index) => {
                  return <ItemTag style={{border: `solid 1px ${tag.get('BackgroundColor')}`}} key={tag.get('TagName')}>{tag.get('TagName')}</ItemTag> 
                })}
              </TagWrapper>
            </ArticalItem>
          </Link>
        )
      })
      return pageList
    }else {
      return null
    }
  }
  render() {
    const {loadMore, currentPage}  = this.props
    return (
      <div>
        {this.getListDom()}
        <ShowMore onClick={() => {loadMore(currentPage + 1)}}>阅读更多</ShowMore>
      </div>
    )
  }
  componentDidMount() {
    // 请求数据
    this.props.getListData(this.props.currentPage)
  }
}
const mapState = (state) => ({
  articalList: state.getIn(['home', 'articalList']),
  summaryMsg: state.getIn(['home', 'summaryMsg']),
  currentPage: state.getIn(['home', 'currentPage'])
})

const mapDispatch = (dispatch) => ({
  getListData(page) {
    dispatch(actionCreators.getArticalListAction(page))
  },
  loadMore(page) {
    dispatch(actionCreators.getShowLoadingAction(true))
    dispatch(actionCreators.getMoreArtcalAction(page))
  }
})


export default connect(mapState,mapDispatch)(ArticalList)