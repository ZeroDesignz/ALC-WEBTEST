import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { useWindowSize } from "../../hooks/useWindowSize";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { Container, NftItem } from "./styled";

SwiperCore.use([Navigation]);

export const SwiperComponent = (props) => {
  const { width } = useWindowSize();

  return (
    <Container id="nets">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 9,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
          550: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          767: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        className="nftSwiper"
      >
        {[...Array(10).keys()].map((index) => (
          <SwiperSlide key={index}>
            <NftItem>
              {props.type === "Ori" ? (
                <img src={`images/NFT/${props.type}${index + 1}.png`} alt="" />
              ) : (
                <img src={`images/NFT/${props.type}${index + 1}.gif`} alt="" />
              )}
            </NftItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
