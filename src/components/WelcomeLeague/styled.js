import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2%;
  position: relative;
  

`

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding:  1%;
  box-sizing: border-box; 
  flex-wrap: wrap;
  z-index: 0;
  max-height:100%;
  
`



export const Headwrapper = styled.div`
margin: 0;
width: 100%;
top: 0;
position: relative;
z-index: 4;   
clear: both;
display: flex;
flex-flow: wrap;
justify-content: center;
align-content: center;
flex-direction: ;
background: 0 0 0.05em #fff, 0 0 0.2em #fe9a05, 0 0 0.3em #fed005;



left{
  /* background-image: url("../images/LEAGUES3K/algoman_3543.png"); 
  background-repeat: no-repeat;
  background-position: top;
  background-size: 90% 210%; */
  flex: 50%;
  /* height: 100%; */
  
  img{
    width: 100%;
    right: 10%;
    position: relative;
    transform: scaleX(-1);
  }
}

right{
  /* background-color: #000000; */
  /* background-image: url("../images/LEAGUES3K/bithero_3543.png"); 
  background-repeat: no-repeat;
  background-position: top;
  background-size: 150% 150%; */
  /* float:  right; */
  flex: 50%;
  
  /* height: 100%; */
  
  img{
    
    width: 100%;
    left: 6%;
    position: relative;
    transform: scaleX(-1);
    // clip: rect(0px,60px,200px,0px);
  }
}

bottom{
  position: relative;
  padding: 1vw 0vw 0vw 0vw;
  top: -15%;
  z-index: 6;
  width: 100%;
  margin-bottom: -10%;
  
  p{
    text-align: center;
    color: black;
    background-color: #1861ac;
    padding: 1.1% 1%;
    font-size: 3vw;
    font-weight: 600;
    border-radius: 5px 75px 5px 25px;
    opacity: 0.9;
    color: white;
    text-shadow: 0 0 0.05em #fff, 0 0 0.2em #08192f, 7px 7px 0.3em #0c2545;
  }
  
}

middle{
  
  flex: 100%;
  /* height: 100%; */
  display: grid;
  position: absolute;
  place-items: center;
  top: 4vw;
  z-index: 5;


  h2{
    text-align: center;
    margin: 0;
    margin-top: 10%;
    margin-bottom: -20%;
    margin-left: 2%;
    font-size: 3.5vw;
    
    margin-top: -0.8em;
    color: white;
    text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe9a05, 0 0 0.3em #fed005;
    /* transform: rotate(-7deg); */
    z-index: -1;
    transform: skew(-15deg);
  }

  or{
    h1{
      position: relative;
      margin: -40% 0% -10% 7%;
      position: relative;
      font-size: 8vw;
      /* transform: skew(-15deg); */
      transform: skew(-15deg);
      letter-spacing: 0.03em;
      text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe9a05, 0 0 0.3em #fed005;
    
      z-index: 7;
      line-height: 0.75em;
      }
  }



  hero{
    position: relative;
    z-index: 3;

    h1{
      margin: 0% 0 0% -20%;
      font-size: 14vw;
      /* transform: skew(-15deg); */
      /* transform: rotate(-7deg); */
      
      letter-spacing: 0.03em;
      /* text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe9a05, 0 0 0.3em #fed005; */
      
      
      
      &::after {
        content: '';
        position: absolute;
        top: -0.1em;
        right: 0.05em;
        width: 0.4em;
        height: 0.5em;
        background: 
          radial-gradient(white 3%, rgba(white, 0.3) 15%, rgba(white, 0.05) 60%, transparent 80%),
          radial-gradient(rgba(white, 0.2) 50%, transparent 60%) 50% 50% / 5% 100%,
          radial-gradient(rgba(white, 0.2) 50%, transparent 60%) 50% 50% / 70% 5%;
        background-repeat: no-repeat;
      }
    }
    span:first-child {
      display: block;
      text-shadow: 0 0 0.1em #054070, 0 0 0.2em black,  0 0 5em #165ff3;
      -webkit-text-stroke: 0.06em rgba(black, 0.5);
    }
    span:last-child {
      position: absolute;
      /* height: 100%; */
      /* left: 42.8%; */
      top: 0;
      background-image: linear-gradient(#032d50 15%, #00a1ef 35%, #fcfcfc 50%, rgb(255, 255, 255) 50%, #00a1ef 65%, #032d50 80%);
      -webkit-text-stroke: 0.01em #0000009d;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  villain{

    position: relative;
    z-index: 3;
    /* margin: -40% 0 40% 0px; */
    
    h1{
      margin: -1% 0 0 20%;
      /* text-align: center; */
      position: relative;
      font-size: 13vw;
      /* transform: skew(-15deg); */
      letter-spacing: 0.03em;
      /* text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe9a05, 0 0 0.3em #fed005; */
      
      &::after {
        content: '';
        position: absolute;
        top: -0.1em;
        right: 0.05em;
        width: 0.4em;
        height: 0.4em;
        background: 
          radial-gradient(white 3%, rgba(white, 0.3) 15%, rgba(white, 0.05) 60%, transparent 80%),
          radial-gradient(rgba(white, 0.2) 50%, transparent 60%) 50% 50% / 5% 100%,
          radial-gradient(rgba(white, 0.2) 50%, transparent 60%) 50% 50% / 70% 5%;
        background-repeat: no-repeat;
        }
    }
    span:first-child {
        display: block;
        text-shadow: 0 0 0.5em #6f0ddf, 0 0 0.2em black,  0 0 5em #165ff3;
        -webkit-text-stroke: 0.06em rgba(black, 0.5);
    }
    span:last-child {
        position: absolute;
        /* left: 30vw; */
        height: 120%;
        top: 0;
        background-image: linear-gradient(#000000 10%, #20125f 25%, #8313e7 40%, #8313e7 40%, #20125f 65%,  #000000 80%);
        -webkit-text-stroke: 0.01em #0000009d;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
  }

}
`



export const Imgwrapper = styled.div`
float: left;
z-index: 1;
width:40%;
margin:0 0% 0 0;
position: relative;



img {
  max-width: 100%;
  height: auto;
  opacity: 0.8;
}
`

export const TextWrapper = styled.div`
width:90%;
height:100%;
z-index: 3 ;
flex-direction: row;
flex-wrap: wrap;
position:relative;
transition: 0.4s;


h1{
    width:100%;
    text-align: center;
  }


p {
  position:relative;
  margin: 0;
  padding: 10px;  
  color: #fff;
  z-index: 3;

  }  
 
`

export const Tab = styled.li`
  cursor: pointer;
  transition: 0.4s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transform: translateY(0);
  margin: 5% 5%;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.8vw;
  flexwrap: wrap;

  /* other styles */
  

  &:hover {
    transform: translateY(-150px);
    
    
  }
  
 
`

export const TabList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
  z-index: 1;
`

export const Face1 = styled.div`
width: 100%;
height: 100%;
position: relative;
align-items: center;
/* opacity: 0.2; */
transition: 0.4s;
position: relative;
/* background: #333; */
display: flex;
justify-content: center;
align-items: center;
z-index: 1;


h1{
  margin: 10% 0 ;
  padding: 1%;
  color: #fff;
  text-align: center;
  font-size: 4vw;
}

&:before {
  content: "";
  position: absolute;
  margin: 0% 20%;
  width: 80%;
  height: 80%;
  background: rgba(0, 164, 255, .5);
  z-index: -1;
  filter: blur(15px);
  background-position: center;
}  

${Tab}:hover & {
  transform: rotateY(0deg);
  opacity: 0;
  transform: translateY(150px);
  
}

backface-visibility: hidden;

`


export const Face2 = styled.div`
position: absolute;

width: 100%;
height: 100%;
margin: 0% 10%;
display: flex;
flex-direction: column;
justify-content: center;
transform: rotateY(180deg);
transition: 0.4s;
display: flex;
padding: 0px;
box-sizing: border-box;
box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
transform: translateY(150px);
opacity: 0;




p{
  margin: 10% 10%;
  padding: 20%;
  text-align: left;
  position: absolute;
  width: 100%;
  
  font-size: 1.8vw;
}
img{
  width:20%;
  margin: 2%;
  position: absolute;
  filter: invert(100%);
}
a {
  margin: 10% 0 ;
  display:  inline-block;
  text-decoration: none;
  font-weight: 900;
  color: #fff;
  padding: 5px;
  border: 1px solid #333;
}


${Tab}:hover & {
  
  background: rgba(4,23,33,0.5);
  opacity: 100%;
  width: 100%;
  height: 100%;
  
  
}

backface-visibility: hidden;

`
export const Stuff = styled.div`

width: 100%;
height: 100%;
margin: 0 3%;
display: flex;
align-items: center;
flex-wrap: wrap;


span{
  position: relative;
  width: 100%;
  float: left;
  align-content: center;
  display: grid;
  margin: 2%;

  h1{
    width: 25%;
    

  }

  img{
   
    position: relative;
  }
}



/* ${Face2} {
  height: 100%;
  margin:0 10%;
} */

`


export const OverBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 76%;
  left: %;
  background-color: #00a4ff47;
  filter: blur(70px);
  z-index:0;
`
