import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  h1 {
    font-size: 3vw;
  }

 
`;



export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0vw 0vw;
  box-sizing: border-box;
  z-index: 1;
  max-width: 1588px;
  width:100%;
  /* ${({ bgimage }) =>
    bgimage &&
    css`
      background-image: url(${(props) => props.bgimage});
      background-size: 100% 100%;
      background-repeat: no-repeat;
    `} */

  
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

export const Group = styled.div`
  display:flex;
  flex-direction: column;
  

`

export const GroupLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span{
    font-size:1.5vw;
  }
`

export const GroupText = styled.div`
  display:flex;
  justify-content: center;
  font-size:2.5vw;
  padding:2rem 0 0;
`