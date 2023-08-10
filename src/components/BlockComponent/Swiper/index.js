import React,{useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { useWindowSize } from "../../../hooks/useWindowSize";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { Container, NftItem } from "./styled";

SwiperCore.use([Navigation]);

export const SwiperComponent = ({ data, sendActiveIndex }) => {
  const { width } = useWindowSize();
  const [swiper, setSwiper] = useState(null);
  const setActiveIndex = (e) => {
    sendActiveIndex(e.realIndex);
  };

  const slideClick = (item) => {
    let index = data.indexOf(item)
    swiper.slideTo(index);
  }

  return (
    <Container id="nets">
      <Swiper
        onSwiper={(s) => setSwiper(s)}
        slidesPerView={5}
        spaceBetween={10}
        slideToClickedSlide={true}
        onActiveIndexChange={(e) => setActiveIndex(e)}
        loop={true}
        className="nftSwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <NftItem>
              <img src={item.image} alt="" onClick={() => slideClick(item)}/>
            </NftItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
