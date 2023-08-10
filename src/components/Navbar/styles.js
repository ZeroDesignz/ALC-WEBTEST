import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  margin-left: 23%;
  margin-bottom: 0;
  z-index: 700;
  justify-content: space-around;
  position: fixed;
  top: 5.4vw;


  @media (max-width:1200px){
    display:none;
  }

  /* @media (min-width: 1200px) {
    width: 90%;
    margin: 0 auto;
  }*/

   @media (min-width: 3600px) {
     top: 4.25vw; }
`;

export const MenuLink = styled.span`
  color: white;
  font-weight: 700;
  font-size: 1.5vw;
  text-decoration: none;
  margin-bottom: 0px;
  cursor: pointer;

  &:hover {
    color: #ff8100;
  }

  ${({ active }) =>
    active &&
    css`
      color: #ff8100;
    `}

  ${({ last }) =>
    last &&
    css`
      margin-right: 0px;
    `}

  /* @media (min-width: 768px){
    font-size: 15px;
    margin:0;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    margin: 0;
  }

  @media (min-width: 1200px){
    font-size:25px;
  }

  @media (min-width: 1600px) {
    font-size: 30px;
  } */
`;
export const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  

  span {
    color: #fff;
    font-weight: bold;
  }
`;
