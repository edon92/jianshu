import styled from 'styled-components'
import "antd/dist/antd.css"

export const HomeWrapper = styled.div`
  display: flex;
  margin: auto;
  padding: 30px 15px 0px 15px;
  width: 960px;
  /* background: #eee; */
`
export const Main = styled.div`
  /* padding-top: 30px; */
  width: 640px;
  /* background: #ccc; */
`
export const Aside = styled.div`
  /* padding-top: 30px; */
  margin-left: 4.16667%;
  width: 280px;
  /* background: #ddd; */
`

export const BannerWrapper = styled.div`
  .bannerPic{
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
    width: 625px;
    height: 270px;
  }
  .swiper-pagination {
    position: relative;
    top: -80px;
  }
  .swiper-pagination-bullet {
    width: 25px;
    height: 2px;
    border-radius: 2px;
  }
  .swiper-pagination-bullet-active {
    background: #fff
  }
`
export const ArticalItem = styled.div`
  width: 100%;
  margin-left: 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
`

export const ItemTitle = styled.div`
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  cursor: pointer;
`

export const ItemAuthorAndTime = styled.p`
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
`

export const TagWrapper = styled.div`
  margin-top: 10px;
  display: flex;
`

export const ItemTag = styled.div`
  margin-right: 10px;
  background-color: #fff;
  color: #626262;
  font-weight: normal;
  display: inline;
  border-radius: 5px;
  padding: 2px 6px;
  cursor: pointer;
`

export const ShowMore = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: #a5a5a5;
  height: 40px;
  line-height: 40px;
  margin: 30px auto 60px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
`

export const LoadingWrapper = styled.div`
  position: fixed;
  z-index: 200;
  top: 50%;
  left: 34%;
  margin-top: 23;
  margin-left: 31.5px;
`

export const Abstract = styled.div`
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
    cursor: pointer;
`

export const BoardWrapper = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
    box-sizing: border-box;
    display: block;
`

export const BoardItem = styled.a`
  .boardImg{
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`

export const AppAd = styled.a`
  display: block;
  margin-bottom: 30px;
  padding: 10px 22px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  width: 280px;
  height: 80px;
  .app {
    margin-top: -10px;
    width: 60px;
    height: 60px;
    opacity: .85;
  }
  .appInfo{
    display: inline-block;
    font-size: 14px;
    color: #666;
    margin-left: 20px;
    min-height: 60px;
    .download {
      display: block;
      font-size: 15px;
      color: #333;
    }
    .ad {
      display: block;
      margin-top: 4px;
      font-size: 13px;
      color: #999;
    }
  }
`

export const WriterWrapper = styled.div`
  width: 280px;
  height: 441px;
`

export const WriterTitle = styled.div`
  padding: 4px 10px;
  color: #666;
  .recommend-writer {
    display: inline-block;
  }
  .switch {
    float: right;
    display: inline-block;
  }
`

export const WriterItem= styled.div`
  margin-top: 10px;
  .avatar{
    display: inline-block;
    margin-top: -18px;
    height: 48px;
    width: 48px;
    border-radius: 50%;
  }
  .writerName {
    display: inline-block;
    padding: 20px 10px;
  }
  .fontCount {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`