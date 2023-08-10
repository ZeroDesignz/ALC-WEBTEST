import styled from "styled-components";

export const Container = styled.div`
  /* background-image: url(${(props) => props.theme.images.stillBkg}); */
  width: 100%;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: top center;
  color: #fff;

  /* @media (min-width: 768px) {
    height: 100%;
    margin-top: 83px;
  }

  @media (min-width: 1200px) {
    height: 100%;
    margin-top: 94px;
  } */
`;
