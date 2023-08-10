import styled from "styled-components";

export const Container = styled.div`
    max-width: 100vw;
    margin: 0;
    /* align-content: center; */
    width: 100%;
    padding: 1vw 4vw;
    border-radius: 5%;
    // background: #22272c;
    // box-shadow: 0px 4px 16px rgba(254, 205, 211, 0.1),
    0px 8px 24px rgba(254, 205, 211, 0.1),
    0px 16px 56px rgba(254, 205, 211, 0.1);
`;

export const Topic = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 60px;
  // color: rgba(255, 255, 255, 0.7);
  text-align: center;

  h1 {
    font-size: 3.5vw;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 500px;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: row;

  label {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 60px;
    font-size: 22px;
    font-weight: 500;
    padding-left: 25px;
    transition: all 0.5s ease;
    position: relative;
    z-index: 10;
    color: rgba(255, 255, 255, 0.7);

   

    
  }

  input[type="radio"] {
    display: none;

    &:checked ~ label:before {
      background: rgba(0, 164, 255, 0.5);
      filter: blur(0);
    }

    &:checked ~ label:after {
      background: rgba(0, 164, 255, 0.5);
    }
  }

  .slider {
    position: absolute;
    left: 0;
    top: 0;
    height: 60px;
    width: 20%;
    border-radius: 12px;
    transition: all 0.5s ease;
    background: #bb86fc;
    top: 0; // Added default position for the slider


  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 20%;
  min-width: 110px;
  margin-right: 2%;

  label {
    cursor: pointer;
    height: 80px;
    line-height: 80px;
    font-size: 5vmin;
    font-weight: 500;
    padding-left: 25px;
    transition: all 0.5s ease;
    z-index: 10;
    color: #000;
    text-shadow: 0px 0px 10px #f8f8f8;
    outline: 1px;

  }

  label.active {
    color: white;
    text-shadow: none;

  }

  input[type="radio"] {
    display: none;

    label:before {
      background: rgba(0, 164, 255, 0.5);
      filter: blur(0);
    }

    label:after {
      background: rgba(0, 164, 255, 0.5);
    }
  }

  .slider {
    position: absolute;
    left: 0;
    top: 0;
    height: 80px;
    width: 100%;
    border-radius: 12px;
    transition: all 0.5s ease, width 5s, height 4s;
    background: #214f9d;
    z-index: 9; // Lower z-index to be behind the labels

    
  }`;

export const Textcontent = styled.div`
  width: 80%;
  height: 52vmin;
  min-height: 500px;
  
  // background-color: #214f9d80;
  background-color: #00000080;
  color: rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  
 
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  position: absolute;
  // line-height:2.2em;
  line-height:4.7vmin;
  padding: 0 4vmin;
  flex-wrap: wrap;
  
  

  &.active {
    opacity: 100%;
    transition: opacity 1.5s ease-in-out;
  }
  
  
  img {
    // flex:50%;
    position: absolute;
    width: 70vmin;
    // height: 500px;
    filter:invert() grayscale(1) drop-shadow(7px 9px 2px black);
    opacity: 25%;
    z-index:1;
    fill: blue;
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(190deg) brightness(118%) contrast(119%);
    
  }

  .title {
    font-size: 25px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  p {
    
    // position: absolute;
    width:60%;
    color: white;
    filter: drop-shadow(0px 5px 1px black);
    display:flex;
    margin: 0;
    margin-bottom:3.5vmin;
    font-size: 3vmin;
    z-index: 3;
    
    
    
  }

  &.active p {
   
  }
`;
