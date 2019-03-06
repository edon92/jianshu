import React, {PureComponent} from 'react'
import {
  BannerWrapper
} from '../style'
import Swiper from 'swiper';
import "swiper/dist/css/swiper.min.css"

class Banner extends PureComponent {
  render() {
    return (
      <BannerWrapper>
        <div className="swiper-container" style={{width: '600px',height: '300px'}}>
          <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img alt='' className="bannerPic" src="https://upload.jianshu.io/admin_banners/web_images/4615/62909ce23863ac5f6a1454c7ba407b85af0a17db.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
              </div>
              <div className="swiper-slide">
                <img alt='' className="bannerPic" src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
              </div>
          </div>
          <div className="swiper-pagination"></div>
        </div> 
      </BannerWrapper>
    )
  }
  componentDidMount() {
    let mySwiper = new Swiper('.swiper-container',{
      pagination: {
        el: '.swiper-pagination',
        type : 'bullets',
        loop: true,
        autoplay: 3000,
      }
    })
  }
}

export default Banner