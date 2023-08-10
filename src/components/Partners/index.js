import React, { useState, useRef } from "react";
import { useTheme } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { useWindowSize } from "../../hooks/useWindowSize";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Container, LogoImg } from "./styles";



const partnerList = [
  {
    id: 1,
    photo: "images/Partners/algo_pard.jpg",
    href: "https://twitter.com/Algo_pard",
  },
  // { id: 2, photo: "images/Partners/AoA_3X.png" },
  // {
  //   id: 3,
  //   photo: "images/Partners/angel.jpg",
  //   href: "https://twitter.com/TheAngelOfAres",
  // },
  {
    id: 4,
    photo: "images/Partners/algo-gem.png",
    href: "https://twitter.com/AlgogemsNFT",
  },
  {
    id: 5,
    photo: "images/Partners/sock-hodler.png",
    href: "https://twitter.com/SockHodler",
  },
  {
    id: 6,
    photo: "images/Partners/nexus-asa.jpg",
    href: "https://twitter.com/AsaNexus",
  },
  // {
  //   id: 7,
  //   photo: "images/Partners/go-drones.jpg",
  //   href: "https://twitter.com/GoDronesManager",
  // },
  {
    id: 8,
    photo: "images/Partners/algo-gaming.jpg",
    href: "https://twitter.com/AlgoGamingGuild",
  },
  {
    id: 9,
    photo: "images/Partners/akita-lnu.png",
    href: "https://twitter.com/AkitaInuASA",
  },
  {
    id: 10,
    photo: "images/Partners/aowls.png",
    href: "https://twitter.com/AOWLs_HootGang",
  },
];

export const Partners = (props) => {
  SwiperCore.use([Autoplay, Navigation]);

  const [swiperInstance, setSwiperInstance] = useState(null);
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  };
  const theme = useTheme();
  const { width } = useWindowSize();
  const navPartner = (href) => {
    window.open(href, "_blank");
  };

  return (
    <Container bgimage={theme.images?.partnerBack} id="partners">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={width > 767 ? true : false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}

        onSwiper={(swiper) => setSwiperInstance(swiper)}
        navigation={true}
        className="swiper-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}

        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          300: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          400: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          550: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          769: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="partnerSwiper"
      >
        {partnerList.map((logo) => (
          <SwiperSlide key={logo.id}>
            <LogoImg
              src={logo.photo}
              alt=""
              onClick={() => navPartner(logo.href)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
