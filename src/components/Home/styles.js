import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  color: #fff;
  display: block;
  min-height: 100vh;
`
export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
width: 90%;

`

export const HomeContentStyled = styled.div`
  width: 100%;
  height: 100%;
  z-index:-5;


  // ${({ bgimage }) => bgimage && css`
  //   /* background-repeat: no-repeat, repeat;
  //   background-size: cover;
  //   object-fit: cover;
  //   background-position: top center;
  //   position:relative; */
  // `}
`

export const HomeContent = (props) => {
  return (
    <HomeContentStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </HomeContentStyled>
  )
}

