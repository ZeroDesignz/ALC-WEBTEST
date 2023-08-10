import React from "react";
import { Container, Content, OverBack, TextWrapper, Imgwrapper, Headwrapper, Tab, Face1, Face2, Stuff } from "./styled";
import { useTheme } from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import DisclaimerA from "../DisclaimerA";
import InfoTab from "../InfoTabs";
export const WelcomeLeague = () => {
  const theme = useTheme();
  const { width } = useWindowSize();

  return (
    <Container id="welcomeLeague">

      <Content bgimage={width < 480 ? theme.images.welcomeMobileBg : theme.images.welcomeShape}>
        <Headwrapper>
          <left>
            <img src="public/images/LEAGUES3K/Algolius_3543.png" alt="Algo Leagues NFT collection" />
          </left>
          <middle>
            <h2>Unleash your inner</h2>
            <hero>
              <h1>
                <span>Hero</span>
                <span>Hero</span>
              </h1>
            </hero>
            <or>
              <h1> or</h1>
            </or>
            <villain>
              <h1>
                <span> Villain </span>
                <span> Villain </span>
              </h1>
            </villain>
          </middle>
          <right>
            <img src="public/images/LEAGUES3K/AOWL007_3543.png" alt="Algo Leagues NFT collection" />
          </right>
          {/* <h1>with Algo Leagues</h1> */}
          <bottom>
            <p>With the ultimate blockchain themed NFT collection</p>
          </bottom>
        </Headwrapper>
        
        


      </Content>

    </Container>

  );
};
