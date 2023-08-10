import React from "react";
import { useTheme } from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Container, Content, Warning } from "./styled";
const DisclaimerA = () => {
    const theme = useTheme();
    const { width } = useWindowSize();
  return (
    <Container id="disclaimera">
      
      <Content
        // bgimage={
        //   width < 480 ? theme.images.welcomeMobileBg : theme.images.welcomeBg
        // }
        >
        <top>  
        <span>&#9888;</span>
        </top> 
        <middle>
        <h1>DISCLAIMER</h1>
        </middle>
        <bottom>
        <box> 
        <p>
          1. All the rules here are liable to change at any time for any reason.
          Announcements with information will be attempted beforehand under all
          circumstances.
        </p>
        </box>
        <box>
        <p>
          2. Algo Leagues NFT Cards, Algo Leagues Packs, Art, or any Algo Leagues
          products are all inherently worthless and were created for
          entertainment value only. Any and all value (real or imagined)
          assigned to them is created by the community. Prices for getting the
          NFT Cards is for entertainment in collecting or participation in the
          game. This is not an investment or security.
        </p>
        </box>
        </bottom>
      </Content>
    </Container>
  );
};

export default DisclaimerA;
