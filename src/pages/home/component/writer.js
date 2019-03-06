import React, {PureComponent} from 'react'
import {
  WriterWrapper,
  WriterTitle,
  WriterItem
} from '../style'

class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <WriterTitle>
          <div className="recommend-writer">推荐作者</div>
          <div className="switch">
            <i className="iconfont spin">&#xe758;</i>
            换一批
          </div>
          <WriterItem>
            <img className="avatar" alt="" src="https://upload.jianshu.io/users/upload_avatars/8723996/5b2500d0-9768-4d3e-831c-47526ec444ed.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"></img>
            <div className="writerName">
              <div className="name">旸晓昆</div>
              <div className="fontCount">写了133.4k字 · 384喜欢</div>
            </div>
          </WriterItem>
        </WriterTitle>
      </WriterWrapper>
    )
  }
}

export default Writer