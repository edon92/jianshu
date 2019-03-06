import React ,{Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import * as actions from './store/actionCreator'
import {Link} from 'react-router-dom'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  Addition,
  Button,
  HotList,
  HotHeader,
  HotSpan,
  HotItem,
  HotItemWrapper
} from './style'

class Header extends Component {
  getListDom() {
    const {focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleSwithItem} = this.props
    const newList = list.toJS()
    const pageList = []
    if(newList.length) {
      if(page === totalPage) {
        for(let i = (page - 1) * 10; i < newList.length; i++) {
          pageList.push(
            <HotItem key={newList[i]}>{newList[i]}</HotItem>
          )
        }
      }else {
        for(let i = (page - 1) * 10; i < page * 10; i++) {
          pageList.push(
            <HotItem key={newList[i]}>{newList[i]}</HotItem>
          )
        }
      }
    }
    if(focused || mouseIn) {
      return (
        <HotList onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <HotHeader>
            <HotSpan className="title">热门搜索</HotSpan>
            <HotSpan className="switch" onClick={() => {handleSwithItem(page, totalPage, this.spinIcon)}}>
            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe758;</i>
              换一批
            </HotSpan>
          </HotHeader>
          <HotItemWrapper>
            {pageList}
          </HotItemWrapper>
        </HotList>
      )
    }else {
      return null
    }
  }
  render() {
    const {focused, handleFocus, handleBlur} = this.props
    return (
      <HeaderWrapper>
        <Link to="/"><Logo /></Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left download">下载APP</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={300}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleFocus} 
                onBlur={handleBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'iconfont magnifier focused' : 'iconfont magnifier'}>&#xe62b;</i>
            {this.getListDom()}
          </SearchWrapper>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <Addition>
            <Button className="writing">
            <i className="iconfont">&#xe601;</i>
            写文章
            </Button>
            <Button className="register">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn'])
})

const mapDispatchToProps = (dispatch) => ({
  handleFocus() {
    dispatch(actions.getHostListAction())
    dispatch(actions.getInputClickAction())
  },
  handleBlur() {
    dispatch(actions.getInputBlurAction())
  },
  handleMouseEnter() {
    dispatch(actions.getMouseEnterAction())
  },
  handleMouseLeave() {
    dispatch(actions.getMouseLeaveAction())
  },
  handleSwithItem(page, totalPage, icon) {
    let spinAngle = icon.style.transform.replace(/[^0-9]/ig, '')
    if(spinAngle) {
      spinAngle = parseInt(spinAngle)
    } else {
      spinAngle = 0
    }
    icon.style.transform = `rotate(${spinAngle +360}deg)`
    console.log(spinAngle)
    dispatch(actions.getSwitchItemAction(page, totalPage))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)