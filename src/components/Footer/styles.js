import React from "react";
import styled, { css } from "styled-components";

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  z-index: 300;
  padding: .5vw 0px 0;
`;

export const FooterContent = styled.div`
  position: relative;
  display: flex;
  z-index: 2;
 
  
`;

export const SocialIcons = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
  align-items: center;
  margin-left: 1vw;

  @media (min-width: 1024px) {
    margin-left: 3vw;
    
  } 
  
  
  svg {
    cursor: pointer;
    font-size:2.5vw;

    // height: 2vw;
    // max-height: 40px;
    // max-width: 70px;
    // min-height: 20px;
    padding: 1vw 1vw;
    margin-bottom: 10px;
    margin-inline: 4px;
    margin-left: 1.5vw;
    // width: 5vw;
    
    background-color: #ffee0081;
    /* transition: 0.1s; */
    color: #fff;
    
    /* padding: 0 2vw ; */
    box-shadow: 2px 2px 2px #ffffff52, 10px 1px 12px #ffffff80,
    2px 2px 10px #ffffff80, 2px 2px 3px #ffffff80, inset 2px 2px 10px #ffffff80,
    inset 2px 2px 10px #ffffff80, inset 2px 2px 10px #ffffff80,
    inset 2px 2px 10px #ffffff80;
    animation: animate 8s linear infinite;
    text-shadow: 0 0 10px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff,
    0 0 200px #0072ff;
    border-radius: 50%;
    
    animation-delay: 0.3s;
    

    &:hover {
      transform: scale(1.25);
    }
    &:active {
      transform: scale(0.98);
    }

    @keyframes animate {
      from {
        filter: hue-rotate(0deg);
      }
      to {
        filter: hue-rotate(360deg);
      }
    }

    
  }
  

  img {
    /* width: 20px; */
    height: 100%;
    cursor: pointer;
    

    /* @media (min-width: 640px) {
      height: 2vw;
      padding: 0 5vw;
      margin: 5px;
    }
  
    @media (min-width: 768px) {
      height: 35px;
      padding: 0 2vw;
    }
  
    @media (min-width: 1024px) {
      height: 50px;
      
    }
  
    @media (min-width: 1200px) {
      height: 50px;
      
    }
  
    @media (min-width: 1400px) {
      height: 50px;
     
    }
  
    @media (min-width: 1600px) {
      height: 50px;
      
    } */
  }

 
`;
export const CopyRightText = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  align-items: flex-end;
  opacity: 100%;

  h5 {
    font-size: 90%;
    margin: 0;
    color: rgb(255 255 255);
    // text-shadow: 1px 1px 2px rgb(27, 15, 0), 0 0 2px rgb(255, 196, 0), 0 0 5px rgb(139, 102, 0);
    
  
    @media (min-width: 200px) {
      margin-bottom: 0.5vh;
      
    } 

    @media (min-width: 500px) {
      margin-bottom: 0.5vw;
      
    } 
  }

`;

export const BackOverStyled = styled.div`
  display: flex;
  width:190%;
  height: 120%;
  position: absolute;
  bottom: 0;
  left: 0;


  @media (min-width: 1024px) {
   height: 100%;
   width: 130%;
  }

  ${({ bgOver }) =>
    bgOver &&
    css`
      background-repeat: no-repeat, repeat;
      background-position: center center;
      background-size: 100% 100%;
      
    `}
  background: rgb(0 114 255 / 46%);
  opacity: 80%;
  
  /* background: linear-gradient(
    rgba(163, 126, 63, 1) 15%,
    rgba(237, 213, 128, 85) 50%,
    rgba(162, 125, 63, 1) 85%
  ); */
  clip-path: polygon(0 0, 20% 0, 23% 48%, 100% 48%, 100% 100%, 0 100%);
`;

export const BackOver = (props) => {
  return (
    <BackOverStyled
      {...props}
      // style={{ backgroundImage: `url(${props.bgOver})` }}
    >
      {props.children}
    </BackOverStyled>
  );
};
