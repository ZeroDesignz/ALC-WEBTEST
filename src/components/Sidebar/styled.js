import styled, { css } from "styled-components";

export const SidebarContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 6vw 0 4vw;
  /* background-color: rgba(42, 57, 144, 0.7); */
  @media (min-width: 1201px) {
    height: 10vw;
    filter: none;
    background: linear-gradient(
      90deg,
      #26226124 0%,
      #282b7442 14%,
      #2b388ff2 22%,
      #00adeef0 50%,
      #2b388ff2 83%,
      #2a34877d 88%,
      #282b7442 94%,
      #26226124 99%
    );
  }
`;
export const MenuList = styled.div`
  padding: 1rem 2rem;
  color: #fff;
  text-align: center;
  font-size: 2rem;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      // background-color: rgba(44, 72, 144, 0.5);
      /* background-color:  #2C4890; */
    `}
`;
