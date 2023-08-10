import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  /* justify-content: center; */
  align-items: start;
  @media (min-width: 300px) {
    padding: 20px;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    padding: 2rem;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    padding: 4rem;
  }

  @media (min-width: 1600px) {
    padding: 6rem 6rem 0;
  }
`;

export const StatusText = styled.span`
  writing-mode: tb-rl;
  transform: rotate(-180deg);
  font-size: 2rem;
  font-weight: bold;
  @media (max-width:768px){
    /* transform:; */
    writing-mode:unset;
    transform: unset;
  }
`;

export const Content = styled.div`
  width: 100%;
  z-index: 1;
  max-width: 1320px;
  ${({ bgimage }) =>
    bgimage &&
    css`
      background-image: url(${(props) => props.bgimage});
      background-size: 100% 100%;
      background-repeat: no-repeat;
    `}

  h1 {
    margin: 10px 0 0;
    text-align: center;
  }

  p {
    margin: 0;
    margin-bottom: 15px;
  }
  @media (min-width: 300px) {
    height: 67vh;
  }

  @media (min-width: 567px) {
  }

  @media (min-width: 768px) {
    height: 62vh;
  }

  @media (min-width: 1200px) {
  }

  @media (min-width: 1400px) {
    height: 62vh;
  }
`;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  height: 85.6%;
  @media (max-width:1000px){
    flex-direction: column;
  }
`;

export const AnimationWrapper = styled.div`
  /* background-image: url(${(props) => props.theme.images.blockWarCard});
  background-size: 100% 100%;
  background-repeat: no-repeat; */
  /* height: 100%;
  ${({ bgimage }) =>
    bgimage &&
    css`
      background-image: url(${(props) => props.bgimage});
      background-size: 100% 100%;
      background-repeat: no-repeat;
    `} */
  position: relative;
  width:100%;
  height:100%;
  video {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index: 1;
  }
`;

export const ActiveText = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  width: 10%;
  z-index: 100;
  position: absolute;
  span{
    
  }
`;

export const ContentFooter = styled.div`
  margin: 0 0.5rem;
  background-color: #9b024b;
  height: 13.4%;
  padding: 0.3rem 10%;
  display: flex;

  clip-path: polygon(
    0 0,
    100% 0,
    100% 40%,
    95.5% 100%,
    7% 100%,
    1.4% 55%,
    0 55%
  );
`;

export const TextWrapper = styled.div`
  width: 50%;
  padding: 2rem;
  @media ( max-width:1000px) {
    width:100%;
  }
`;

export const ImgWrapper = styled.div`
  width: 50%;
  @media ( max-width:1000px) {
    width:100%;
    display: none;
  }
`;

export const LeftBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

export const LeftTitle = styled.div`
  width: 20%;
  font-weight: bold;
  font-size: 2rem;
  @media (max-width:768px){
    font-size:1rem;
  }
`;

export const LeftDesc = styled.div`
  width: 70%;
  font-weight: bold;
  font-size: 2rem;
  @media (max-width:768px){
    font-size: 1rem;
  }
`;

export const RightHeader = styled.div`
  background-image: url(${(props) => props.theme.images.blockWarCardBack1});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  height: 24%;
`;

export const RightBody = styled.div`
  background-image: url(${(props) => props.theme.images.blockWarCardBack2});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 0.5rem;
  height: 76%;
`;

export const FooterBtn = styled.div`
  width: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const SelType = styled.select`
  width: 13rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: transparent;
  border: none;
  background-image: url(${(props) => props.theme.images.blockWarCardBack1});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* option:checked {
    background-color: transparent;
  } */
  option {
    background: #010d1f;
  }
`;
