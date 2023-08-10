import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
  position: relative;

  @media (min-width: 480px) {
    padding: 20px;
  }

  @media (min-width: 768px) {
    padding: 4vw;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  z-index: 1;
  word-wrap: break-word;
  width: 100%;
  max-width: 1588px;

  ${({ bgimage }) =>
    bgimage &&
    css`
      background-image: url(${(props) => props.bgimage});
      background-size: 100% 100%;
      background-repeat: no-repeat;
    `}

  h1 {
    margin: 10px 0 0;
    text-align: center;
  }

  p {
    margin: 0;
    margin-bottom: 15px;
    padding: 10px;
  }

  @media (min-width: 300px) {
    padding: 26px 35px 35px;
    h1 {
      margin-top: 4vw;
    }
    p {
      max-width: 75%;
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
      max-width: 75%;
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
  }
`;

export const SubContent = styled.p`
  display: block;
  align-items: center;
  @media (min-width: 768px){
    display:flex;
  }
`;

export const ContentText = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ContentImg = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const OverBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80%;
  height: 66%;
  left: 10%;
  background-color: #00a4ff47;
  filter: blur(15px);
`;
