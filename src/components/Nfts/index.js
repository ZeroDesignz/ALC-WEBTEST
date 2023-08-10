import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
import { useWindowSize } from '../../hooks/useWindowSize'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import {
  Container,
  NftItem,
} from './styles'

SwiperCore.use([Pagination, Navigation, Autoplay])

export const Nfts = (props) => {
  const { width } = useWindowSize()

  return (
    <Container id='nets'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        navigation={true}
        loop={true}
        speed={2000} // set the speed to 1 second (1000ms)
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pauseOnMouseEnter={true}
        pauseOnMouseLeave={true}
        pagination={{
          "clickable": true
        }}
        
        
        className="nftSwiper"
      >
        {
          [...Array(10).keys()].map((index) => (
            <SwiperSlide key={index}>
              <NftItem>
                <img src={`ALC-WEBTEST/images/NFT/Neap${index + 1}.gif`} alt='' />
              </NftItem>
            </SwiperSlide>
          ))
        }
        {
          [...Array(10).keys()].map((index) => (
            <SwiperSlide key={index}>
              <NftItem>
                <img src={`images/NFT/Legend${index + 1}.gif`} alt='' />
              </NftItem>
            </SwiperSlide>
          ))
        }
        {
          [...Array(10).keys()].map((index) => (
            <SwiperSlide key={index}>
              <NftItem>
                <img src={`images/NFT/Epic${index + 1}.gif`} alt='' />
              </NftItem>
            </SwiperSlide>
          ))
        }
        {
          [...Array(10).keys()].map((index) => (
            <SwiperSlide key={index}>
              <NftItem>
                <img src={`images/NFT/Rare${index + 1}.gif`} alt='' />
              </NftItem>
            </SwiperSlide>
          ))
        }
        
      </Swiper>
    </Container>
  )
}
