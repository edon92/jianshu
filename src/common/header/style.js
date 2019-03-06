import styled from 'styled-components'
import LogoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  height: 56px;
  min-width: 1024px;
  border-bottom: 1px solid #eee;
`

export const Logo = styled.span`
  display: block;
  width: 100px;
  height: 56px;
  background: url(${LogoPic}) no-repeat;
  background-size: 100%;
`

export const Nav = styled.div`
  width: 945px;
  height: 100%;
  padding-right: 30px;
  box-sizing: border-box;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #969696;
  &.active {
    color: #ea6f5a;
  };
  &.left{
    float: left;
  };
  &.right{
    float: right;
  };
  &.download {
    color: #333;
  };
`
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  box-sizing: border-box;
  .magnifier {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    color: #999;
    &.focused {
      background: #999;
      color: #fff;
    };
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  &.slide-enter {
    transition: all .3s ease-out;
  };
  &.slide-enter-active {
    width: 220px;
  };
  &.slide-exit {
    transition: all .2s ease-out;
  };
  &.slide-exit-active {
    width: 160px;
  };
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  padding: 0 40px 0px 20px;
  box-sizing: border-box;
  margin-top: 9px;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 220px;
  }
`
export const HotList = styled.div`
  position: absolute;
  z-index: 200;
  padding: 0 20px;
  top: 56px;
  width: 220px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #fff;
`
export const HotHeader = styled.div`
  height: 20px;
  color: #969696;;
`
export const HotSpan = styled.span`
  font-size: 14px;;
  margin-top: 10px;
  display: inline-block;
  color: #969696;
  &.title{
    float: left;
  }
  &.switch {
    font-size: 12px;
    float: right;
    .iconfont {
      font-size: 12px;
    }
    &:hover {
      color: #333;
    }
  }
  .spin {
    display: inline-block;
    transition: all .3s ease-in;
  }
`
export const HotItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  min-height: 130px;
`

export const HotItem = styled.a`
  display: block;
  padding: 2px 3px;
  margin-right: 15px;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
  color: #999;
  border: 1px solid #ddd;
  border-radius: 3px;
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  text-align: center;
  font-size: 17px;
  font-weight: 200;
  &.register {
    margin-right: 20px;
    width: 80px;
    border: 1px solid #ea6f5a;
    color: #ea6f5a;
  }
  &.writing {
    background: #ec6149;
    color: #fff;
    width: 100px;
    font-weight: 200;
    margin-right: 10px;
  }
`