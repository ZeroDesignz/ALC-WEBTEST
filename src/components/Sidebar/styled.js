import styled, { css } from "styled-components";

export const SidebarContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 5rem 0;
  /* background-color: rgba(42, 57, 144, 0.7); */
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
