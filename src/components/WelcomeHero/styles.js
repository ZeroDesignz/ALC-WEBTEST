import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
  position: relative;
  
  @media (min-width: 480px) {
    height: 355px;
  }

  @media (min-width: 768px) {
    height: 45vw;
  }

  @media (min-width: 1600px) {
    padding-top: 25px;
  }
`
export const StillBkg = styled.img`
  width: 100%;
`