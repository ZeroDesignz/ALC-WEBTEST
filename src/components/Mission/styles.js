import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1vw;
  position: relative;

 
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2vw;
  box-sizing: border-box; 
  z-index: 1;
  


  h1{
    margin: 10px 0 0;
    text-align: center;
  }

  p {
    margin: 0;
    margin-bottom: 15px;
    padding: 10px;
  }


`

export const OverBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 80%;
  
  background-color: #00a4ff47;
  filter: blur(3vw);
`

export const LogoWrapper = styled.div`
  display: flex;
  width: 80%;
  

  img {
    width: 100%;
  }

`
export const ALCtext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;

  p {
    margin: 0;
  
    /* overflow-y: auto; */
    /* font-weight: 700; */
    font-size: 1.8vw;
    white-space: normal;
    padding: 2vw;
    word-spacing: 0.15vw;

  }


`
