import React from "react";
import styled, { css } from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  position: relative;
  ${({ bgimage }) =>
    bgimage &&
    css`
      background-repeat: no-repeat;
      background-size: 100% 100%;
    `}
  min-height: 200px;
  margin: 0px 20px 50px;
  max-width: 1588px;

  @media (min-width: 768px) {
    margin: 0 4vw 50px;
  }

  @media (min-width: 1800px) {
    margin: 0 auto 5vw;
  }
`;
export const Container = (props) => {
  return (
    <ContainerStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </ContainerStyled>
  );
};

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 2;
  width: 100%;

  @media (min-width: 300px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 20px 0 33px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const LogoWrapper = styled.div`
  display: block;
  h1 {
    text-align: center;
  }
  @media (min-width: 480px) {
    /* width: 56%; */
    margin-bottom: 10px;
    padding: 3vw;
  }

  @media (min-width: 567px) {
    /* width: 55%; */
    margin-bottom: 20px;
    padding: 3vw;
  }
  @media (min-width: 1200px) {
    p {
      line-height: 3.5vw;
      padding: 0 10px 0 0;
      font-size: 20px;
    }
  }

  @media (min-width: 1600px) {
    width: 57%;
    justify-content: center;
    padding: 3vw;
    p {
      font-size: 30px;
    }
  }
`;
export const ALCtext = styled.div`
  padding:1vw;
  p {
    margin: 0;
    margin-bottom: 37px;
    line-height: 29px;
  }

  @media (min-width: 480px) {
    width:100%;
    p {
      /* margin: 3rem 0; */
      /* padding: 1rem; */
      line-height: 27px;
    }
  }

  @media (min-width: 567px) {
    p {
      max-height: unset;
    }
  }

  @media (min-width: 650px) {
    p {
      line-height: 30px;
    }
  }

  @media (min-width: 768px) {
    align-items: center;
    height: 100%;
    width:40%;
    p {
      margin-top: 0;
      margin-bottom: 15px;
      font-size: 16px;
      line-height: unset;
    }
  }

  @media (min-width: 1024px) {
    p {
      line-height: 4vw;
      font-size: 18px;
    }
  }

  @media (min-width: 1200px) {
    p {
      line-height: 3.5vw;
      padding: 0 10px 0 0;
      font-size: 20px;
    }
  }

  @media (min-width: 1600px) {
    p {
      font-size: 25px;
      line-height: 60px;
      padding: 0 70px 0 0;
    }
  }
`;

export const OverBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 97%;
  height: 90%;
  top: 4%;
  left: 1%;
  background-color: #00a4ff47;
  filter: blur(15px);

  @media (min-width: 1200px) {
    width: 96%;
    height: 90%;
    top: 4%;
    left: 2%;
  }
`;

export const ALCItem = styled.p`
  svg {
    cursor: pointer;
  }
`;
