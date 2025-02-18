import React from 'react'

export default function SwiperComponent() {

  return (
    <div className='carousel'>
      <div className='carousel-wrapper'>
        <img className='swiper-img' src="/projectImages/everythingpasta.png"/>
        <img className='swiper-img' src="/projectImages/standardbarbecue.png"/>
        <img className='swiper-img' src="/projectImages/mindfulconnections.png"/>
        <img className='swiper-img' src="/projectImages/savannassweets.png"/>
        <img className='swiper-img' src="/projectImages/chessguessr.png"/>
      </div>
      <div id="left-chev"></div>
      <div id="right-chev"></div>
    </div>
  )
}
