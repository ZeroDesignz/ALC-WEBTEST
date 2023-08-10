import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin-bottom: 50px;
  overflow: hidden;
  width: 100%;
  display: inline-block;

  ${({ bgimage }) => bgimage && css`
    background-image: url(${props => props.bgimage});
    background-size: 221%;
    background-repeat: no-repeat;
    background-position: center;

  `}

  .partnerSwiper {
    padding: 30px 0;
    max-width: 80%;
    margin: 0 auto;
    overflow: hidden;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 56%;
    object-fit: cover;
  }

  @media (min-width: 400px) {
    background-size: 188%;
  }

  @media (min-width: 480px) {
    background-size: 125%;
  }

  @media (min-width: 567px) {
    background-size: 108%;
  }

  @media (min-width: 768px) {
    margin-bottom: 7vw;

    .partnerSwiper {
      max-width: 90%;
    }
    .swiper-slide img {
      width: 10vw;
    }
  }

  @media (min-width: 1024px) {
    background-size: 100%;
  }
`

export const LogoImg = styled.img`
  border-radius: 50%;
  cursor:pointer;
  /* @media (min-width: 768px) {
    height: unset;
    width: 100%;
  } */
`

export const BackOver = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`