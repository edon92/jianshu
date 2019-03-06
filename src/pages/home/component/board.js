import React, {PureComponent} from 'react'
import VipPic from '../../../static/vip.png'
import HotPic from '../../../static/hot.png'
import HallPic from '../../../static/Hall.png'
import copyrightPic from '../../../static/copyright.png'
import serializePic from '../../../static/serialize.png'
import monthHotPic from '../../../static/monthHot.png'
import {
  BoardWrapper,
  BoardItem,
  AppAd
} from '../style'

class Board extends PureComponent {
  render() {
    return (
      <BoardWrapper>
        <BoardItem>
          <img className="boardImg" alt ="" src={VipPic}></img>
        </BoardItem>
        <BoardItem>
          <img className="boardImg" alt ="" src={HotPic}></img>
        </BoardItem>
        <BoardItem>
          <img className="boardImg" alt ="" src={HallPic}></img>
        </BoardItem>
        <BoardItem>
          <img className="boardImg" alt ="" src={copyrightPic}></img>
        </BoardItem>
        <BoardItem>
          <img className="boardImg" alt ="" src={serializePic}></img>
        </BoardItem>
        <BoardItem>
          <img className="boardImg" alt ="" src={monthHotPic}></img>
        </BoardItem>
        <AppAd>
          <img className="app" alt="" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"></img>
          <div className="appInfo">
            <span className="download">下载简书手机App > </span>
            <span className="ad">随时随地发现和创作内容</span>
          </div>
        </AppAd>
      </BoardWrapper>
    )
  }
}

export default Board