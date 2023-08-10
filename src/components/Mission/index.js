import React from "react";
import { useTheme } from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ALCtext, Container, Content, LogoWrapper, OverBack } from "./styles";

export const Mission = (props) => {
  const theme = useTheme();
  const { width } = useWindowSize();

  return (
    <Container id="mission">
      <Content
        // bgimage={
        //   width < 480 ? theme.images.welcomeMobileBg : theme.images.welcomeBg
        // }
      >
        <ALCtext>
          <h1>Mission</h1>
          <p>
            The AlgoLeagues recognises that cryptocurrencies like Algorand are
            here to stay, but that there is a large disparity of knowledge as it
            relates to crypto among the general public. Our purpose is to
            provide scalability by building a bridge between the ‘real world’
            and Algorand’s ecosystem. We value knowledge, community, and
            creating a fun way to immerse people into the world of crypto
            through our collectible NFTs, storyline, Participation Rewards, and
            collabs/partnerships. We exist to subvert the status quo of the
            ‘Play-to-Earn’ gaming model by introducing a new intra-collaborative
            model called: Play-to-(L)Earn.
          </p>
        </ALCtext>
        <LogoWrapper>
          <img src="ALC-WEBTEST/images\LEAGUES3K\HeadLine_3543.png" alt="" />
        </LogoWrapper>
      </Content>
      <OverBack bgimage={width > 1024 && theme.images.welcomeShape} />
    </Container>
  );
};
