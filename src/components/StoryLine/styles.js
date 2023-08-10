import styled, { css } from "styled-components";

export const Container = styled.div` 
padding: 1.5rem;
height: auto;
width: 100%;
max-height: ;
display: block;
align-items: center;
/* background: rgba(255, 255, 255, 0.375); */
/* box-shadow: 0 0.75rem 2rem 0 rgb(0 0 0 / 10%);
border-radius: 2rem;
border: 1px solid rgba(255, 255, 255, 0.125); */
margin: 0;
box-sizing: border-box;

  h1{
    // font-family: "Bangers", sans-serif;
    color: rgb(255, 255, 255);
    // margin: -1.25em 0 -0.25em 0;
    /* margin: -1.25em 0 -0.25em 0; */
    margin: 0;
    text-shadow:10px 13px 10px #202020ba, 4px 2px 0px #090a0a, -3px 4px 5px #1d1e1f;
    /* text-shadow: -1px -1px yellow, 1px 1px orange,  2px 2px orange; */
    /* padding-bottom: 24px; */
    /* float: left; */
    width: 100%;
    // transform: rotate(-22deg);
    // line-height: 1vw;
    font-size: 5vw;
    text-align: left;
    padding-left: 1vw;
    /* max-width: 500px; */
    // transform: rotate(-10deg) skew(-10deg, 0);
    position: absolute;
    z-index: 2;

    // @media (min-width: 700px) {
    //   font-size: 7.50vw;
    // }

    // @media (min-width: 300px) {
    //   font-size: 7.50vw;
    // }
    
  }
  
  h2{
    /* font-family: "Bangers", sans-serif; */
    /* color: rgb(255, 255, 255); */
    /* margin: -1.25em 0 -0.25em 0; */
    /* margin: -1.25em 0 -0.25em 0; */
    /* text-shadow: -4px 0px #0694d5, -2px 6px #222f78, 2px 6px #0c1637; */
    /* text-shadow: -1px -1px yellow, 1px 1px orange,  2px 2px orange; */
    padding: 1.5vw 0;
    /* float: left; */
    width: 100%;
    /* transform: rotate(-22deg); */
    // line-height: 1em;
    font-size: 3.5vw;
    text-align: center;
    /* max-width: 500px; */
    /* transform: rotate(-10deg) skew(-10deg, 0); */
    position: relative;
    z-index: 2;
    word-spacing: 0.15vw;
    margin: 0;
    
  }
`;

export const Content = styled.div`
  max-width: 100vw;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  background: rgba(0,0,0,50%);
  box-shadow: 0 0.75rem 2rem 0 rgb(0 0 0 / 10%);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.125);
  
  
  /* padding: 1.5rem;
  height: auto;
  width: 100%;
  max-width: 1140px;
  max-height: 640px;
  display: flex;
  
  background: rgba(255, 255, 255, 0.375);
  box-shadow: 0 0.75rem 2rem 0 rgb(0 0 0 / 10%);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.125);
  margin: 0;
  box-sizing: border-box; */
  

  flex-wrap: wrap;
  box-sizing: border-box;
  /*  */
  /* flex-direction: row; */
  /*  */
  height: ; 
  position:relative;
  
  align-content:center;
  align-items: center;
  z-index: 1;

  header{
    width:10px;
  }

  // h1{
  //   // font-family: "Bangers", sans-serif;
  //   color: rgb(255, 255, 255);
  //   margin: -1.25em 0 -0.25em 0;
  //   /* margin: -1.25em 0 -0.25em 0; */
  //   text-shadow: -4px 0px #0694d5, -2px 6px #222f78, 2px 6px #0c1637;
  //   /* text-shadow: -1px -1px yellow, 1px 1px orange,  2px 2px orange; */
  //   /* padding-bottom: 24px; */
  //   /* float: left; */
  //   width: 100%;
  //   // transform: rotate(-22deg);
  //   // line-height: 1vw;
  //   font-size: 7vw;
  //   text-align: left;
  //   /* max-width: 500px; */
  //   // transform: rotate(-10deg) skew(-10deg, 0);
  //   position: sticky;
  //   z-index: 2;

  //   // @media (min-width: 700px) {
  //   //   font-size: 7.50vw;
  //   // }

  //   // @media (min-width: 300px) {
  //   //   font-size: 7.50vw;
  //   // }
    
  // }
  

  ${({ bgimage }) =>
    bgimage &&
    css`
      /* background-image: url(${(props) => props.bgimage}); */
      /* background-size: 100% 100%; */
      /* background-repeat: round; */
      /* background-size: contain; */
      /* background-position: top; */
      /* position: fixed; */
      /* width: 100%; */
      /* z-index: 1;
      opacity: 25%;
      top: 3.5vw;
      left: -12.5vw; */
      /* height: 100vh; */
      /* object-fit: cover; */
    `}

  // h1 {
  //   // font-family: "Bangers", sans-serif;
  //   color: grey;
  //   margin: 0 0 -1em 0;
  //   padding-left: 10px;
  //   text-shadow: -1px -1px yellow, 1px 1px orange,  2px 2px orange;
  //   /* margin: 10px 0 0 ; */
  //   text-align: center;
  //   width: 100%;
  //   /* z-index: 200; */
    
  // }

  p {
   
  }

  @media (min-width: 300px) {
    /* height: 67vh; */
    /* flex-direction: column-reverse; */
    /* padding-bottom:1rem; */
  }

  /* @media (min-width: 600px) {
    flex-direction: row;
    padding:0;
  } */

  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
  }

  @media (min-width: 1400px) {
  }
`;

/* export const Blog = styled.div`

  width: 100%;
  hegiht: 100%;
  display: flex;
  size: ;

`; */


export const BlogTexts = styled.div`
  width: 49%;
  font-size: 5vw;
  line-height: 1.5vw;
  margin-bottom: 2.5vw;
  letter-spacing: -0.025vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  max-height: 37vw;
  padding:  2vw  1vw;
  overflow: hidden;
  justify-content: stretch;
  
  
  


  /*  */
  overflow-y: auto;
/* 
  height:88%;
  margin:0 0 0 42vw;
  
  line-height: 2.25rem;
  width: 55.5%;
  top: 2%;
   */


  p {
    font-size: 2.25vw;
    /* font-family: "Happy Monkey",cursive; */
    line-height: 3.5vw;
    word-spacing: -0.09vw;
    flex-wrap: wrap;
    text-align: justify;
  }
  p + p {
    text-indent: 2vw;
  }

  @media (min-width: 300px) {
    /* width:100%; */
    /* height:73vh; */
    /* padding:1rem 1rem 0 3rem; */
  }
  @media (min-width: 600px) {
    /* width:64%; */
    /* height: 48vh; */
  }

  @media (min-width: 1200px) {
    
  }

  @media (min-width: 1400px) {
  }

  @media (min-width: 1600px) {

  }
`;

export const ImgStory = styled.div`
 /* width:100%; */
 /* direction: rtl; */
 width: 50%;
 
 flex-wrap: wrap;
 /* padding: 1px 10px;
 margin-left: 56%; */
 display: flex;
 padding:  1vw;

`;

export const BlogImage = styled.div`
  /* width: 50%; */
  

  @media (min-width:300px) {
    /* width:85%; */
    /* margin:0.7rem 1.2rem 0.8rem auto;  */
  }
  @media (min-width: 600px) {
    /* width:50%; */
    /* margin:0 0.5rem 0 0; */
    
  }
  position: left;
  // margin-top:10px ;
  width: 100%;
  height: 39vw;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;  
  float: left;
  border-radius: 1rem;

  clip-path: polygon(
    0 0,
    0 0,
    100% 0,
    100% 0,
    100% 89.5%,
    100% 100%,
    15% 100%,
    0 85%
  );

`;

export const PageNationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 222;

  span {
    /* font-size: 30px; */
  }

  @media (min-width: 300px) {
    /* span {
      font-size: 15px;
    }
    width: 50vw;
    margin: 2vw auto; */
  }
  @media (min-width: 768px) {
    /* span {
      font-size: 20px;
    } */
  }
  @media (min-width: 1200px) {
    /* span {
      font-size: 25px;
    } */
    /* width: 25vw;
    margin: -1vw 0 0 10vw; */
  }
  @media (min-width: 1475px) {
  }
  @media (min-width: 1600px) {
  }
`;
