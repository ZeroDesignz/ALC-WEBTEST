import styled from 'styled-components'
import { useSpring, animated } from '@react-spring/web'


export const Container = styled.div`
  padding: 50px 20px;
  overflow: hidden;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  
  h1 {
    width: 100%;
    font-size: 10vw;
    text-align: center;
  }

  span {
    position: relative;
    top: 50%;
    margin-top: 14vw;
  }
`;


export const Content = styled(animated.div)`
  padding: 5px 10px;
  overflow: hidden;
  /* width: 100%; */
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  effect: overflow;
  z-index: 0;

  
  
  deck {
    --grain: url(/img/grain.webp);
    --glitter: url(/img/glitter.png);
    --glittersize: 25%;
    --space: 5%;
    --angle: 133deg;
    --imgsize: cover;
    --red: #f80e35;
    --yellow: #eedf10;
    --green: #21e985;
    --blue: #0dbde9;
    --violet: #c929f1;
    --clip: inset( 9.85% 8% 52.85% 8% );
    --clip-invert: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0 47.15%, 91.5% 47.15%, 91.5% 9.85%, 8% 9.85%, 8% 47.15%, 0 50%);
    --clip-stage: polygon(91.5% 9.85%, 57% 9.85%, 54% 12%, 17% 12%, 16% 14%, 12% 16%, 8% 16%, 8% 47.15%, 92% 47.15%);
    --clip-stage-invert: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0 47.15%, 91.5% 47.15%, 91.5% 9.85%, 57% 9.85%, 54% 12%, 17% 12%, 16% 14%, 12% 16%, 8% 16%, 8% 47.15%, 0 50%);
    --clip-trainer: inset(14.5% 8.5% 48.2% 8.5%);
    --clip-borders: inset(2.8% 4% round 2.55% / 1.5%);
    width: 21vw;
    height: 28vw;
    /* color: aquamarine;
    background-color: brown; */
    display: inline-block;
    /* background-image: url('/images/NFT/Epic000.gif'); */
    background-position-x: 80px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 30px;
    box-shadow: -3px -3px 3px 0px rgba(#26e6f7, 0.3),
                 3px 3px 3px 0px rgba(#f759e4, 0.3),
                 0px 0px 6px 2px rgba(#ffe759, 0.3),
                 0px 35px 25px -15px rgba( 0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    /* margin: 20px 10px; */
    z-index: 1;

    
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    /* margin-left: -0.5vw; */
  }
    

  

  deck:before,
  deck:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-position: 0% 0%;
    background-repeat: no-repeat;
    background-size: 300% 300%;
    mix-blend-mode: color-dodge;
    opacity: 0.2;
    z-index: 2;
    animation: haloGradient 15s ease infinite;

    will-change: transform, opacity, background-image, background-size,
    background-position, background-blend-mode, filter;

    background-image: linear-gradient(
      115deg,
      transparent 0%,
      rgb(0,231,255) 30%,
      rgb(255,0,231) 70%,
      transparent: 100%
    );



  }

  deck:after{
    background-image: url("http://s3-us-west-2.amazonaws.com/s.cdpn.io/13471/sparkles.gif");
    position: center;
    background-size: 180%;
    mix-blend-mode: color-dodge;
    opacity: 1;
    z-index: 3;
    animation: haloSparkle 15s ease;
  }

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #000000e1;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  


  















  /* .nftSwiper {
    max-width: 100vw;
    max-height: 50vw;
    height: 25vw;
  } */
  /* .swiper {
    width: 100%;
    height: 100%;
  } */
  /* .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;
    /* Center slide text vertically 
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  } 
    .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top: 1px inset #ffffff;

  } */

  /* @media (min-width: 768px) {
    overflow: auto;

    .swiper-wrapper {
      height: 10vw;
    }

    .nftSwiper {
      .swiper-slide img {
        border-top-right-radius: 2px;
        border-top-left-radius: 2px;
        height: 8vw;
        width: 100%;
        transform: translateX(0);
      }

      .swiper-slide-next {
        img {
          height: 10vw;
        }
      }
    }
  } */

  /* @media (min-width: 1400px) {
    .swiper-wrapper {
      height: 10vw;
    }

    .nftSwiper {
      .swiper-slide img {
        border-top-right-radius: 2px;
        border-top-left-radius: 2px;
        height: 8vw;
        width: 100%;
        transform: translateX(0);
      }

      .swiper-slide-next {
        img {
          height: 10vw;
        }
      }
    }
  } */
`



export const NftItem = styled.div`
`