import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { useWindowSize } from "../../hooks/useWindowSize";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import { Container, NftItem } from "./styled";

SwiperCore.use([Navigation]);

export const BioSwiper = ({ data, sendActiveIndex }) => {
  const theme = useTheme();
  const { width } = useWindowSize();
  const location = useLocation();
  const [swiper, setSwiper] = useState(null);
  const setActiveIndex = (e) => {
    sendActiveIndex(e.realIndex);
  };

  const slideClick = async (item) => {
    let index = data.indexOf(item);
    sendActiveIndex(index);
    await swiper.slideTo(index + 6);
  };

  useEffect(() => {
    async function fetchData() {
    if (location.pathname.split("/")[2]) {
      let id = location.pathname.split("/")[2];
      let item = theme.ASAInfos.find((e) => {
        return e.id === id;
      });
      if (item) {
        sendActiveIndex(item.order);
        if (swiper !== null) {
          await swiper.slideTo(item.order + 6);
        }
      }
    }
  }
  fetchData();
  }, [location.pathname, sendActiveIndex, swiper, theme.ASAInfos]);

  return (
    <Container id="nets">
      <Swiper
        onSwiper={(s) => setSwiper(s)}
        slidesPerView={5}
        spaceBetween={10}
        navigation={width > 767 ? true : false}
        loop={true}
        onActiveIndexChange={(e) => setActiveIndex(e)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="nftSwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <NftItem>
              <img src={item.image} alt="" onClick={() => slideClick(item)} />
            </NftItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
