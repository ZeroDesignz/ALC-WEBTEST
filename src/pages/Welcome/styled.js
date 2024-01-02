import styled, { css } from "styled-components";

export const Sidebar = styled.div`
  width: 26%;
  height: 100%;
  position: fixed;
  z-index: 3;
  background: rgb(0, 8, 17);
  background: linear-gradient(
    24deg,
    rgba(0, 8, 17, 1) 0%,
    rgba(3, 21, 45, 1) 100%
  );
  padding: 10vw  0 6vw;
`;

export const Container = styled.div`
  background-image: url(${(props) => props.theme.images.homeBg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  // margin: 10vw;
  padding: 1vw 0 77px 0;
  /* overflow-y: auto; */
  width: 100%;
  /* height:860vh; */
  height: 100%;
  min-height: 100vh;
  // @media (min-width: 300px) {
  //   padding: 60px 0 48px 0;
  // }
  // @media (min-width: 768px) {
  //   padding: 80px 0 53px 0;
  // }
  // @media (min-width: 1024px) {
  //   padding: 7.6vw 0 65px 0;
  // }
  // @media (min-width: 1200px) {
  //   padding: 7vw 0 70px 0;
  // }
  // @media (min-width: 1600px) {
  //   padding: 7vw 0 77px 0;
  // }
`;


export const OutletContainer = styled.div`
  width: 100%;
  ${({ wallet }) =>
    wallet &&
    css`
      width: 74%;
      margin-left: auto;
    `}
`;
