import React from 'react'
import styled, { css } from 'styled-components'

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MobileMenus = styled.img`
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
  top: 12.5vw;
  background-color: ${({ isHome, theme }) => isHome ? '#333' : `${theme.colors.backgroundPage}`};
  overflow-x: hidden;
  transition: 0.34s;
  // left: 0;
  background-color: #0184ec70;

  @media (min-width:1201px) {
    top: 12.5vw;
  }
  @media (max-width: 561px) {
    top: 70px;
  }

 
  
`
export const LinkWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 10vw 2vw;
  z-index: 2;
`

export const MenuLink = styled.a`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  appearance: none;
  border: none;
  padding: 3vw;
  margin: 3vw 0;
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
  font-size: calc(12px + 1.5vw);
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
  height: 100%;
  position: absolute;
  top: 0;

  ${({ bgOver }) => bgOver && css`
    background-repeat: no-repeat, repeat;
    background-position: center center;
    background-size: 90% 105%;
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
