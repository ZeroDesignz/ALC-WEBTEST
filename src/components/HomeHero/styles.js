import styled, {css} from "styled-components";

export const Container = styled.div`
  display: flex;
  /* align-items: baseline; */
  width: 100%;
  height: 82vh;
  /* max-height:1024px; */
  position: relative;
  //  background-image: url(${(props) => props.theme.images.stillBkg}); 
 
`;

export const StillBkg = styled.video`
  position: fixed;
  width: 100%;
  z-index: 0;
  opacity: 25%;
  top: 3.5vw;
  // left: -12.5vw;
  height: 100vh;
  object-fit: cover;
  
  /* video{ 
    width: 100%;
    height: 100%;
    
  } */
  
`;

export const MenuWrapper = styled.div`
  z-index:100;
  width: 360px;
  margin-left: 20px;
  height:77vh;
  position:fixed;
  background-image: url(${(props) => props.theme.images.joinTextBack});
  padding:8rem 4rem 0;
  background-size: 100% 100%;
`;

export const MenuLink = styled.p`
  color: white;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
  margin-bottom: 5px;
  cursor:pointer;

  &:hover{
    color:#ff8100;
  }

  ${({ active }) => active && css`
    color: #ff8100;
  `}

  ${({ last }) => last && css`
    margin-right: 0px;
  `}

  @media (min-width: 1024px) {
    font-size: 2vw;
    margin-bottom: 25px;
  }

  @media (min-width: 1600px) {
    font-size: 64px;
  }
`


export const ContentWrapper = styled.div`
position: absolute;
width: 100%;
height: 100vh;
top: -6vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
flex-wrap: nowrap;

  /* :root {
   --text-weight: 500;
   --text-width: 100;
    --text-slant: 0;
  } */

  /* body {
    font-family: "Roboto VF", sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #262626;
    color: #fff;
    padding: 7vmin;
  } */

  h1 {
    position: absolute;
    text-align: center;
    display: block;
    width: 100%;
    margin: 55px 0;
    text-transform: uppercase;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    opacity: 0%;
    -webkit-animation: anim 3.2s ease-out forwards 1s;
    animation: anim 3.2s ease-out forwards 1s;
    padding: 1vw 0;
    font-size: 7vw;
    /* max-width: 45ch; */
    /* text-align: center;
    font-size: 10vw;
    padding: 3vw 0.5vw; */
  }

  strong {
    display: block;
    font-weight: 400;
    font-size: 3vw;
    color:#ff8100;
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
  .line2 {
    display: block; 
    width: 100%;
    
  }

  /* .char {
    font-stretch: var(--text-width);
    font-style: oblique var(--text-slant);
    font-weight: var(--text-weight);
    font-variation-settings: "wght" var(--text-weight), "wdth" var(--text-width), "slnt" var(--text-slant);
    --glow-hue: 0;
    --glow-size: 10;
    text-shadow: 0 0 calc(var(--glow-size) * 1px) hsla(var(--glow-hue), 100%, 77%, 1);
  } */

  
  
  /* z-index: 2;
  display: block;
  justify-content: center;
  font-size: 10vw;
  max-width: 45ch;
  text-align: center;
  align-items: center;
  height:100%;
  color:#ff8100; */

 /* z-index: 2;
  display: flex;
  justify-content: center;
  font-size: 2em;
  width:100%;
  align-items: center;
  height:100%;
  color:#ff8100; */
  /* @media (min-width: 480px) {
      font-size: 18px;
  }

  @media (min-width: 768px) {
      font-size: 4vw;
  }

  @media (min-width: 1024px) {
      font-size: 5vw;
  }

  @media (min-width: 1600px) {
      font-size: 80px;
  } */
`
