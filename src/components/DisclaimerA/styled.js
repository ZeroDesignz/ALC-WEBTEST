import styled, { css } from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  maxheight: 1080px
  background: #000;
  overflow: hidden;
  padding: 1% 2%;
  z-index: 1;


  @media (min-width: 480px) {
    /* padding: 20px; */
  }

  @media (min-width: 768px) {
    /* padding: 4vw; */
  }
`;



export const Content = styled.div`
  /* box-sizing: border-box;
  max-width: 100%;  */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  /* max-height:1300px; */
  box-shadow: 0px 0px 0px 3px #fff, 0px 0px 0px 10px #000, 0px 0px 0px 12px #444;
  user-select: none;
  bakcground: #fff;

  /* ${({ bgimage }) =>
    bgimage &&
    css`
      background-image: url(${(props) => props.bgimage});
      background-size: 100% 100%;
      background-repeat: no-repeat;
    `} */

  top {
    width: 100%;
    height: 30%;
    padding-left: ;
    line-height: ;
    background: #000000b8;
    text-align: center;
  }
  span {
      font-size: 13vw;
      color: #fff;
      font-weight: 500;

  }
  middle{
    width: 100%;
    height: 50%;
    padding-top: ;
    padding-left: ;
    line-height: 6vw;
    background: #ffffffd1;
    text-align: center;
    

  }

  bottom{
    width:100%;
    display: flex;
    background: #000000b8;

  }

  h1 {
    color: #000;
    font-size: 7vw;
    letter-spacing: 20px;
    font-weight: 700;
    transform: scaleY(1.4);
    white-space: nowrap;
  }
  
  box {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: left;
    padding: 1%;
    
  }

  p {
    /* margin: 0;
    margin-bottom: 15px;
    padding: 10px;
    width: 60%; */
    
    color: #fff;
    font-weight: 700;
    
    font-size: 1.8vw;
    white-space: normal;
    // transform: scaleX(0.85) scaleY(1.2);
    padding: 3%;
    word-spacing: 0.15vw;
    
  }

  sec1 {
    padding-top: 10px;
  }

  /* @media (min-width:300px){

  }

  @media (min-width: 480px) {
    padding: 0px 35px 80px;
    h1 {
      margin-top: 4vw;
    }
    p {
      font-size: 18px;
      margin-bottom: 4vw;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 5vw;
      line-height: 6vw;
    }
    p {
      max-width: 85%;
      font-size: 2.6vw;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 4vw;
      line-height: 5vw;
    }
    p {
      max-width: 85%;
      font-size: 2.2vw;
    }
  }

  @media (min-width: 1600px) {
    h1 {
      font-size: 100vw;
      line-height: 119px;
    }
    p {
      max-width: 75%;
      font-size: 30px;
      line-height: 44px;
    } */
  
`;

/* export const Warning = styled.div`
  display: flex;
  flex-direction: column;
  align-items: :left;
  padding: 0px;
  box-sizing: border-box;
  z-index: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  height: 30vh;
  line-height: 30vw;
  background: #000;
  text-align: center;
  position: absolute;
  left: -33px;
  top: -1px;
  color: #fff;
  font-weight: 700;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 40px;
  letter-spacing: 10px;
  white-space: nowrap;
  transform: scaleX(0.8) scaleY(1.4);
`; */