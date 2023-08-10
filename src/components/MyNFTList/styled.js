import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  height:100%;
  position: relative;
  display: flex;
  flex-direction: column;
  /* background-image: url(${(props) => props.theme.images.homeBg});
  background-repeat: no-repeat;
  background-size: 100% 100%; */
  /* justify-content: center; */
  align-items: center;
  @media (min-width: 480px) {
    padding: 20px;
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1200px) {
    padding: 4rem;
  }

  @media (min-width: 1600px) {
    padding: 6rem;
  }
`;
