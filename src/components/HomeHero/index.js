import React from "react";
import { useTheme } from "styled-components";
import {
  Container,
  ContentWrapper,
} from "./styles";



export const HomeHero = () => {
  const theme = useTheme();


  return (
    <Container id="homeHero">
      <ContentWrapper>
        <h1>Welcome <strong class="line2">to the Algo Leagues </strong></h1>
      </ContentWrapper>
    </Container>
  );

};

