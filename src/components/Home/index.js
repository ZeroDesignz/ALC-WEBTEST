import React from "react";
import { useTheme } from "styled-components";
import { HomeHero } from "../HomeHero";
import { Mission } from "../Mission";
import { Nfts } from "../Nfts";
import { Vision } from "../Vision";
import { Team } from '../Team'
import { Partners } from "../Partners";
import NewTabs from "../NewTabs"

import { Container, HomeContent, Content, StillBkg, } from "./styles";
import { JoinTeam } from "../JoinTeam";
import { WelcomeLeague } from "../WelcomeLeague";
import { HowTo } from "../HowTo";
import { StoryLine } from "../StoryLine";
import Disclaimer from "../InfoTabs";
import DisclaimerA from "../DisclaimerA";
import { Nftz } from "../Nftz";

export const Home = (props) => {
  const theme = useTheme();

  return (
    <Container>
      <StillBkg src={theme.videos.alhomeVideo} autoPlay loop muted/>
      <HomeContent id="homeContent">
        <Content>
        <HomeHero />
        <WelcomeLeague />
        <Nfts/>
        <Mission />
        <NewTabs/>
        <Vision />
       
        {/* <DisclaimerA /> */}
        <StoryLine />
        
        {/* <Nftz /> */}
        <HowTo />
        
        <Partners />
        <Team />
        {/* <Disclaimer /> */}
        <JoinTeam />
        </Content>
      </HomeContent>
    </Container>
  );
};
