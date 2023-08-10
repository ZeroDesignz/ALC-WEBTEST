import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1vw;
  position: relative;

  /* @media (min-width: 480px) {
    padding: 20px;
  }

  @media (min-width: 768px) {
    padding: 4vw;
  } */
`;

export const Content = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vw;
  box-sizing: border-box;
  z-index: 1;
  width:100%;
  
  position: relative;


  

  /* ${({ bgimage }) =>
    bgimage &&
    css`
      background-image: url(${(props) => props.bgimage});
      background-size: 100% 100%;
      background-repeat: no-repeat;
    `} */

  /* h1 {
    margin: 10px 0 0;
    width:100%;
    text-align: center;
  }

  p {
    position:relative;
    margin: 0;
    margin-bottom: 15px;
    padding: 10px;
    color: #fff;
    z-index: 3;
  } */

  /* @media (min-width:300px){

  }

  @media (min-width: 480px) {
    padding: 80px 35px 80px;
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
      font-size: 80px;
      line-height: 119px;
    }
    p {
      max-width: 75%;
      font-size: 30px;
      line-height: 44px;
    }
  } */
`;

export const Tab = styled.li`
  width: 90%;
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
display: grid;
flex-direction: column;
justify-content: center;
transform: rotateY(180deg);
transition: 0.4s;
padding: 0px;
box-sizing: border-box;
box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
transform: translateY(150px);
opacity: 0;


img{
  /* width:20%;
  margin: 2%;
  position: absolute; */
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

align-items: center;
flex-wrap: wrap;



span{
  position: relative;
  width: 100%;
  flex: 100%;
  float: left;
  align-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 1vw;
  justify-content: center;
  
  /* background-color: #33333375; */

  h1{
    position: relative;
    width: 100%;
    text-align: center;
    padding: 0%;
    margin: 0%;
    

  }

  img{
   padding-left: 2vw;
    position: relative;
    width: 25%;
    
  }

  


  text{
    position: relative;
    width: 70%;
    align-items: center;
    

    p{
    
   
      text-align: left;
      width: 100%;
      padding: 2vw;
      font-size: 1.8vw;
    }

  }
}
`