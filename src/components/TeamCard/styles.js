import styled, { css } from "styled-components";

export const TeamsListsStyled = styled.div`
  position: relative;
  display: block;
  width: 100%;
  z-index: 2;


  ${({ bgimage }) =>
    bgimage &&
    css`
      background-repeat: no-repeat, repeat;
      background-size: 221%;
      background-position: top left;
    `}

  @media (min-width: 400px) {
    background-size: 190%;
  }

  @media (min-width: 480px) {
    background-size: 125%;
  }

  @media (min-width: 567px) {
    background-size: 108%;
  }

  @media (min-width: 1024px) {
    background-size: 100%;
  }
`;
export const TeamsLists = (props) => {
  return (
    <TeamsListsStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})`, backgroundSize:'100% 100%' }}
    >
      {props.children}
    </TeamsListsStyled>
  );
};

export const GridContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding:3rem 0;
  display: block;
  justify-content: space-between;

  @media (min-width: 1200px) {
    display:flex
  }

`;

export const GridItem = styled.div`
  @media (min-width: 400px) {
    width:100%;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
    width:30%;
  }

  @media (min-width: 1600px) {
    width:30%;
  }
`;

export const Title = styled.h1``;

export const Content = styled.div``;
