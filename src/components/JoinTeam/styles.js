import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  height: 40vw;
  margin-bottom: 20px;
  overflow: hidden;
`
export const Content = styled.div`
  position: absolute;
  left: 9%;
  width: 100%;
  height: 100%;
  top: 17%;
`
export const JinSection = styled.div`
  position: relative;
  width: 85%;
  height: 75%;
  padding: 2vw;

  ${({ bgimage }) => bgimage && css`
    background-image: url(${props => props.bgimage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `}

  img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`
export const JoinTexts = styled.div`
  z-index: 2;
  position: absolute;
  left: 11%;
  top: 24%;

  h3 {
    margin: 0;
    width: 24vw;
    font-size: 3vw;
    text-align: center;
  }
`

export const JoinShape = styled.div`
  position: absolute;
  width: 24vw;
  height: 23.7vw;
  top: 2vw;

  ${({ bgimage }) => bgimage && css`
    background-image: url(${props => props.bgimage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `}
`