import styled, { css } from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 12.5vw;
  text-align: center;
  z-index: 300;
  min-height: 70px;

  background: radial-gradient(
    35.7% 300% at 50.03% 52.25%,
    #fffbcc 0%,
    #faf1ba 12%,
    #efd98e 34%,
    #eed688 37%,
    #ebbb10 69%,
    rgba(195, 146, 46, 0.60) 100%
  );

  // @media (min-width: 300px) {
  //   background-filter: hue-rotate(150deg);
  // }

  @media (min-width: 1201px) {
    height: 10vw;
    filter: none;
    background: linear-gradient(
      90deg,
      #26226124 0%,
      #282b7442 14%,
      #2b388ff2 22%,
      #00adeef0 50%,
      #2b388ff2 83%,
      #2a34877d 88%,
      #282b7442 94%,
      #26226124 99%
    );
  }
`;

export const Container = styled.div`
  /* display: ;
  flex-wrap: wrap; */
  position: relative;
  width: 100%;
  /* height: 100vw; */
  /* padding: 20px 0px; */
  min-height: 70px; 

  /* @media (min-width: 768px) {
      padding-top: 6px;
    } */
`;

export const HeaderContent = styled.div`
  position: relative;
  /* top: 10px; */
  /* left: 30px; */
  display: flex;
  /* padding: 15px 0px; */
  align-items: center;

  width: 100%;
  /* max-width: 1745px; */
  z-index: 102;
  /* margin: 0 auto; */
  min-height: 80px;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 0vw;
  width: 100%;
  
`;

export const Logo = styled.div`
  display: absolute;
  /* width: 100%; */
  margin: 0vw 3vw 0.5vw 8vw;
  width: 12%;

  img {
    display: flex; 
    width: 100%;
    margin-top: 0.6vw;
    height: 100%;

    &:hover {
      transform: scale(0.80, 0.80);
      box-shadow: 0 1px 10px px rgba(0, 0, 0, 0.15);
      transition: box-shadow 0.3s ease-in-out;
    }

    &:active {
      transform: scale(0.80, 0.80);
    }
  }

  @media (max-width: 1200px) {
    /* font-size: 1rem; */
    padding: 0.25vw;
    margin: 0.5vw 3vw 0.5vw 8vw;
    position: relative;
  }
`;

export const HeaderLogo = styled.img`
  /* height: 5rem;
  width: 5rem; */
  /* display: flex; */
  /* height: 40%; */
  width: 90%;
  margin-top: 0.25vw;
  // margin-left: 3vw;
  height: 100%;
  /* padding:  0vw ; */

  &:hover {
    transform: scale(0.80, 0.80);
    box-shadow: 0 1px 10px px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;
  }

  &:active {
    transform: scale(0.80, 0.80);
  }
`;

export const TitleImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  margin: 0% 1% 0 3%;
  padding: 1vw 2vw ;

  span {
    display: block ruby;
    z-index: 2;
    color: #fff;
    font-size:calc(12px + 1vw);
    font-weight: bold;
  }

  img {
    position: absolute;
    top: 0.3vw;
    bottom: 0px;
    width: 100%;
    height: 100%;
    /* max-width: 1000px; */
  }

  @media (max-width: 1200px) {
    // margin: 2vw 3vw;
    // top: 1.75vw;

    img {
      /* position: absolute; */
      /* top: 0vw; */

      /* max-width: 1000px; */
    }
  }
`;

export const MobilMenu = styled.img`
  position: absolute;
  right: 70px;
  top: 30px;
  cursor: pointer;
  height: 50px;
`;

export const BackOverStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  // max-height: 8vw;
  /* color: #00000; */
  // filter: hue-rotate(160deg);

  position: absolute;

  /* max-height: 130px; */
  top: 0;
  @media (max-width: 1200px) {
    display: none;
  }

  ${({ bgOver }) =>
    bgOver &&
    css`
      background-repeat: no-repeat, repeat;
      background-position: center center;
      background-size: 100% 100%;
    `}
`;

export const BackOver = (props) => {
  return (
    <BackOverStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgOver})` }}
    >
      {props.children}
    </BackOverStyled>
  );
};

export const BoostBtn = styled.div`
  /* border: 1px solid #000; */
  position: fixed;
  padding: 0.5vw 2vw;
  border-radius: 1rem;
  font-weight: bold;
  background-color: #ecbf1f;
  box-shadow: 1px #000;
  cursor: pointer;
  font-size: 1.5vw;
  color: #0c3764;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 1vw;
  margin-bottom: 3.3vw;
  right: 0.25vw;

  @media (max-wblockz-index: 102;idth: 1200px) {
    /* font-size: 1rem; */
    padding: 1vw 2vw;
    margin: 1vw;
    position: relative;
  }

  /* @media (max-width: 1500px) {
  font-size: 1rem;
  padding:0.4rem;
} */
`;

export const MobileMenuWrapper = styled.div`
  padding: 3vw;
`;

export const BlockTimes = styled.div`
  display: flex;
  width: 70%;
  margin-left: 0.5vw;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    margin-right: 3vw ;
    padding: 2vw 0;
    max-height: 10vw;
    margin-top: 1vw;
  }
`;

export const BlockText = styled.div`
  padding-left: 1%;
  padding-top: 0.9%;
  /* margin-left: 1rem; */
  display: inline;
  width: 30%;
  font-weight: bold;
  text-align: left;
  font-size: 1vw;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const WalletBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  border: 1rem;

  span {
    font-size: 1rem;
  }

  img {
    width: 2rem;
  }

  :hover {
    background-color: rgba(42, 132, 251, 0.5);
  }
`;
