import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 20px;
 
  width: 100%;
  

  .nftSwiper {
    position: relative;
    height: 100%;
    /* max-width: 100vw;
    max-height: 50vw; 
    height: 25vw; */
  }
  .swiper {
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  .swiper-pagination-bullet {
    display: none; /* This will hide the dots on the image */
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top: 1px inset #ffffff00;

  }

  @media (min-width: 768px) {
  
  }

  
  
`
export const NftItem = styled.div`
`