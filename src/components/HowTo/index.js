import React from "react";
import { Nfts } from "../Nfts";
import DisclaimerA from "../DisclaimerA";
import InfoTab from "../InfoTabs";
import NewTabs from "../NewTabs"
import { Container, Content, Group, GroupLogo, GroupText } from "./styled";
import { useTheme } from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Vision } from "../Vision";

export const HowTo = () => {
  const theme = useTheme();
  const { width } = useWindowSize();
  return (
    <Container id="howTo">
      <DisclaimerA />
      {/* <h1>OUR NFTS</h1> */}
      {/* <img src={theme.images.howToTop} width="100%"/> */}
      <Content
        // bgimage={
        //   width < 480 ? theme.images.welcomeMobileBg : theme.images.welcomeBg
        // }
      >
        {/* <Nfts/> */}
        {/* <NewTabs/> */}
        {/* <InfoTab /> */}
        
        {/* <h1>1st  - COLLECT OUR NFTS</h1> */}
        
        <Group>
          {/* <div style={{ textAlign: "center" }}>
            <img src={theme.images.groupTop} width="100%" />
          </div> */}
          <GroupText>
            You can purchase our Characters & Catalyst NFTs on
          </GroupText>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "2rem 0",
            }}
          >
            {/* <GroupLogo>
              <a href="https://ab2.gallery/address/PZNGYF4Y25GGO674BW4CRDHFKOKHMHZXSFXIKMYPEJCQAUTDH52WV24XTY" target="_blank"><img src={theme.images.ab2} width="150px" /></a>
              <span>AB2 GALLERY</span>
            </GroupLogo> */}
            <GroupLogo>
              <a href="https://algogems.io/gallery/AlgoLeaguesOfficial" target="_blank"><img src={theme.images.gem} width="150px" /></a>
              <span>ALGOGEMS</span>
            </GroupLogo>
          </div>
          <div style={{textAlign:'center'}}>
            {/* <img src={theme.images.groupBottom} width="100%" /> */}
          </div>
        </Group>
        
        {/* <Vision /> */}
      </Content>
      {/* <img src={theme.images.howToBottom} width="100%"/> */}
    </Container>
  );
};
