import React from 'react'
import styled, { css } from 'styled-components'

export const ContainerStyled = styled.div`
  display: flex;
  position: relative;
  padding: 5vw 0vw;
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat;
    background-size: 100% 100%;
  `}
  min-height: 200px;
  max-width: 1588px;
`
export const Container = (props) => {
  return (
    <ContainerStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </ContainerStyled>
  )
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  h1{
    /* margin: 10% 0; */
    /* padding: 1%; */
    color: #fff;
    text-align: center;
    font-size: 4vw;
    word-spacing: 0.15vw;
    margin: 0;
  }

  p{
    text-align: center;
    width: 100%;
    padding: 1vw;
    font-size: 1.8vw;
    word-spacing: 0.15vw;
  }

`
export const LogoWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #e3b41552;
  filter: blur(0vw);
  border-radius: 10%;
  

  img {
    width: 95%;
  }

  span {
    margin: 2vw 2vw 0.5vw;
    width: 37%;
    font-size: 1.6vw;
    text-align: center;
    
  }

`
export const ALCtext = styled.div`
  display: flex;
  /* padding: 0 20px; */
  /* padding-left: 33px; */
  flex-direction: column;
  justify-content: center;

  p {

    text-align: left;
    width: 100%;
    padding: 2vw;
    font-size: 1.8vw;
    word-spacing: 0.15vw;
    /* margin: 0; */
    /* margin-bottom: 37px; */
    /* line-height: 29px; */
    /* overflow-y:auto; */


    span {
      display: block;
      margin: 2vw ;
    }
  }

  
`

export const OverBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 40%;
  z-index: -2;
  background-color: #ebbb117a;
  filter: blur(3vw);
 
}


`

export const Box = styled.div`
  display: flex;
  /* width:85%; */
  flex-direction: row;
  align-items: center;
  z-index: 2;
  margin: 0vw 3vw;
  justify-content: center;
  
`