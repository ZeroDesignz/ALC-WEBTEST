import styled, {css} from "styled-components";

export const Container = styled.div`
  display: flex;
  /* align-items: baseline; */
  width: 100%;
  height: 82vh;
  // max-height: 700px;
  /* max-height:1024px; */
  position: relative;
 
`;

export const ContentWrapper = styled.div`
position: absolute;
width: 100%;

bottom: 0;
top: -6vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
overflow-x: hidden;



  h1 {
    position: absolute;
    text-align: center;
    display: block;
    
    margin: 55px 0;
    text-transform: uppercase;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    opacity: 0%;
    -webkit-animation: anim 4.2s ease-out forwards 1s;
    animation: anim 4.2s ease-out forwards 1s;
    padding: 1vw 0;
    font-size: 7vw;
    /* max-width: 45ch; */
    font-size: 10vw;
    padding: 3vw ;
    max-height: 250px;
    white-space: nowrap; /* Prevent text from wrapping to multiple rows */
  }

  
  .line2 {
    display: block;  
  }

  strong.line2 {
    font-weight: 400;
    font-size: 3vw;
    color: #b79018;
    text-align: center; /* Add this property to center-align the text */
    
  }

  @-webkit-keyframes anim {
    0% {
      text-shadow: 0 0 50px #fff;
      letter-spacing: 80px;
      opacity: 0;
      -webkit-transform: rotateY(-90deg);
    }
    50% {
      text-shadow: 0 0 1px #fff;
      opacity: 0.8;
      -webkit-transform: rotateY(0deg);
    }
    75% {
      text-shadow: 0 0 1px #fff;
      opacity: 0.8;
      -webkit-transform: rotateY(0deg) translateZ(60px);
    }
    100% {
      text-shadow: 0 0 1px #fff;
      opacity: 0.7;
      letter-spacing: 8px;
      -webkit-transform: rotateY(0deg) translateZ(100px);
    }
  
  }
  @keyframes anim {
    0% {
      text-shadow: 0 0 50px #fff;
      letter-spacing: 80px;
      opacity: 0;
      -moz-transform: rotateY(-90deg);
    }
    50% {
      text-shadow: 0 0 1px #fff;
      opacity: 0.8;
      -moz-transform: rotateY(0deg);
    }
    75% {
      text-shadow: 0 0 1px #fff;
      opacity: 0.8;
      -moz-transform: rotateY(0deg) translateZ(60px);
    }
    100% {
      text-shadow: 0 0 1px #fff;
      opacity: 0.7;
      letter-spacing: 8px;
      -moz-transform: rotateY(0deg) translateZ(100px);
    }
  
  }
  

 
`
