import styled from "styled-components";

export const Container = styled.div`
  background-image: url(${(props) => props.theme.images.homeBg});
  width: 100%;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: top center;
  /* margin-top: 55px;
  padding-bottom: 35px; */
  color: #fff;

`;
