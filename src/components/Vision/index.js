import React from "react";
import { useTheme } from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Container, Content, LogoWrapper, ALCtext, OverBack, Box } from "./styles";

export const Vision = (props) => {
  const theme = useTheme();
  const { width } = useWindowSize();

  return (
    <Container
      
      id="vision"
    >
      <Content>
      <h1>EARN ALC</h1><h2>( ALGO LEAGUES COIN )</h2>
        <p>
        <span>
              $ALC is our ecosystem utility token which players can earn through
              both PvE and PvP game modes, as well through staking.{" "}
        </span>
        </p>
        <Box>
        <LogoWrapper>
          <span>Algo Leagues Coin</span>
          <span>ASA ID : 445905873</span>
          <img src={theme.images.alcImg} alt=""/>
        </LogoWrapper>
        <ALCtext>
          {/* <h1>Vision</h1> */}
          <p>
            
            
            <span>1 bilion total supply</span>
            <span>
              It is an Algo Leagues exclusive in-game participation rewards
              asset that the team does not plan to sell. We will leave it up to
              you, the players, to build worth into how you see fit, overtime
            </span>
            <span>Used in The Algo Leagues ALC NFT Swap for NFTs</span>
            <span>Please see disclaimer</span>
          </p>
        </ALCtext>
        <OverBack />
        </Box>
      </Content>
      
    </Container>
  );
};
