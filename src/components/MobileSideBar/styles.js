import React from 'react'
import styled, { css } from 'styled-components'

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MobileMenu = styled.img`
  width: 30px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 38px;
    cursor: none;
  }

  @media (min-width: 1200px) {
    width: 40px;
  }

  @media (min-width: 1600px) {
    width: 45px;
  }
`
export const MobileSideBar = styled.div`
  
`

export const SidebarContent = styled.div`
  position: relative;
  width: 0;
  height: 100%;
  position: fixed;
  z-index: 5;
  top: 60px;
  background-color: ${({ isHome, theme }) => isHome ? '#333' : `${theme.colors.backgroundPage}`};
  overflow-x: hidden;
  transition: 0.34s;
  right: 0;
  background-color: #0184ec70;

  // @media (min-width:768px){
  //   top:12vw;
  // }
  // @media (min-width:1065px){
  //   top:11.5vw;
  // }
`
export const LinkWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 15px 20px;
  z-index: 2;
`

export const MenuLink = styled.a`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  appearance: none;
  border: none;
  padding: 10px;
  margin: 0px;
  text-align: inherit;
  display: block;
  width: 100%;
  outline: none !important;

  &:hover {
    color: #f1f1f1;
  }

  ${({ isCustomer }) => isCustomer && css`
    border-bottom: 1px solid black;

    @media (min-width: 451px) {
      display: none;
    }
  `};

  @media (max-height: 450px) {
    font-size: 18px;
  }
`

export const TextInfo = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.04ch;
  text-transform: capitalize;
  text-align: left;
  margin: 0px;
  padding: 0px;
  display: block;
  font-variant-ligatures: no-common-ligatures;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;

  ${({ active }) => active && css`
    color: #ff8100;
  `}
`


export const SideBarOverStyled = styled.div`
  display: flex;
  width: 100%;
  height: 280px;
  position: absolute;
  top: 0;

  ${({ bgOver }) => bgOver && css`
    background-repeat: no-repeat, repeat;
    background-position: center center;
    background-size: 80% 95%;
    opacity: 0.1;
  `}
`

export const SideBarOver = (props) => {
  return (
    <SideBarOverStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgOver})` }}
    >
      {props.children}
    </SideBarOverStyled>
  )
}
