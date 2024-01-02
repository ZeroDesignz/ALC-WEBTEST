import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-around;
  margin-left: 35%;
  position: fixed;
  top:6.3vw;

  @media (max-width: 1200px) {
    /* width: 90%; */
    /* margin-left:  25%; */
    /* top: 6.5vw; */
  }

  @media (max-width:1200px){
    display:none;
  }

  @media (min-width: 3600px) {
    top: 4vw;
  }
`;

export const MenuLink = styled.span`
  color: white;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
  margin-bottom: 5px;
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

  /* @media (min-width: 1024px) {
    font-size: 2vw;
    margin: 0;
  }

  @media (min-width: 1600px) {
    font-size: 32px;
  } */
`;
export const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  font-size:1.75vw;

  span {
    color: #fff;
    font-weight: bold;
  }

  /* @media (min-width: 1024px) {
    font-size: 2vw;
    margin: 0;
  }

  @media (min-width: 1600px) {
    font-size: 32px;
  } */
`;
