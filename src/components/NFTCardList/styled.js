import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 300px) {
    padding: 20px;
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1200px) {
    padding: 4rem;
  }

  @media (min-width: 1600px) {
    padding: 3rem 6rem;
  }
`;

export const NFTCardItem = (props) => {
  return (
    <CardStyled {...props} style={{ backgroundImage: `url(${props.bgimage})` }}>
      {props.children}
    </CardStyled>
  );
};

export const CardStyled = styled.div`
  display: flex;
  position: relative;
  ${({ bgimage }) =>
    bgimage &&
    css`
      background-repeat: no-repeat;
      background-size: 100% 100%;
    `}
  min-height: 200px;
  margin: 0px 20px 50px;
  max-width: 1000px;
  width: 100%;
  @media (min-width:300px){
    flex-direction:column;
    margin:0 auto;
    /* height:44vh; */
  }
  @media (min-width: 768px) {
    margin: 0 4vw;
    flex-direction: row;
    /* height:100%; */
  }

  @media (min-width: 1800px) {
    /* margin: 0 auto 5vw; */
  }
`;

export const NFTImg = styled.img`
  /* width: 450px; */
  /* margin: 0.5rem 0; */
  background-color: ${(props) => props.bgColor};
  margin: 0.4rem 0 0.4rem 0.4rem;
  padding-bottom: 0.5rem;
  clip-path: polygon(
    0 0,
    0 0,
    100% 0,
    100% 0,
    100% 92.2%,
    96% 92.2%,
    83% 100%,
    9.3% 100%,
    0% 89.3%
  );
  @media (min-width: 300px) {
    width: 80%;
    margin:0 auto;
  }

  @media (min-width: 768px) {
    width: 350px;
  }
  @media (min-width:850px){
    width:400px;
  }
  @media (min-width: 996px) {
    width: 450px;
  }
`;

export const NFTDetails = styled.div`
  height: 425px;
  overflow-y: auto;
  margin: 0.3rem 0 2.7rem;
  @media (min-width: 300px) {
    width: 100%;
  }
  @media (min-width:768px){
    width: 545px;
    background-color: rgba(1, 3, 7, 0.5);
  }
`;

export const DetailText = styled.div`
  padding: 1rem 2rem;
  @media (min-width: 1024px) {
    padding: 1rem;
  }
`;

export const DetailTitle = styled.span`
  font-weight: bold;
  @media (min-width: 300px) {
    font-size: 15px;
  }
  @media (min-width: 990px) {
    font-size: 18px;
  }
`;

export const DetailBody = styled.span`
  line-height: 2rem;
  @media (min-width: 300px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const SubItems = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60%;
  height: 37px;
  padding-left: 3rem;
  padding-top: 1rem;
  /* background-color: rgba(1, 3, 7, 0.5); */
  align-items: center;
  z-index: 10;
  img {
    cursor: pointer;
  }
  p {
    margin: 0;
  }
  @media (min-width: 300px) {
    display: none;
  }
  @media (min-width: 768px) {
    width: 60%;
    display: flex;
  }
`;

export const SubNFTList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
`;

export const SubNFTImg = styled.img`
  width: 20px;
  height: 30px;
`;

export const SubDetailList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-left: 5%;
`;

export const SubDetailText = styled.div`
  p {
    font-weight: bold;
  }
`;

export const NFTCarousel = styled.div`
  display: flex;
  align-items: center;
  /* padding-top:3vw; */
`;

export const CarouselBody = styled.div`
  width: 280px;
  overflow: scroll hidden;
  -webkit-overflow-scrolling: touch;
  display: flex;
  padding-top: 3vw;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const NftItem = styled.div`
  img {
    cursor: pointer;
  }

  ${({ active }) =>
    active &&
    css`
      transform: scale(1.4);
    `}

  :hover {
    transform: scale(1.2);
  }

  @media (min-width: 300px) {
    img {
      width: 28px;
    }
  }
  @media (min-width: 500px) {
    img {
      width: 35px;
    }
  }
  @media (min-width: 880px) {
    img {
      width: 70px;
    }
  }

  @media (min-width: 1345px) {
    /* margin: 0 4vw 50px; */
    width: 100px;
  }
`;
