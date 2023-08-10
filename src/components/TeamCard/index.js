import React from "react";
import theme from "../../theme.json";
import { TeamsLists, Content, Title, GridItem, GridContainer } from "./styles";

export const TeamCard = (props) => {
  return (
    <TeamsLists bgimage={theme.images.teamListBack} id="about">
      <GridContainer>
        <GridItem>
          <Title>- Swap</Title>
          <Content>
            Use your AlgoLeagues Coin to swap for NFTs! (link to ALC NFT SWAP)
          </Content>
        </GridItem>
        <GridItem>
          <Title>- Upgrade</Title>
          <Content>
            Upgrade your NFT rarity to increase its attack defense and health
            and your weekly ALC drop amount! (Upgrade recipe images for example)
            Upgrade events are biweekly on Saturdays at 9AM/PM EST and subject
            to availability. Use AlgoLeagues Coin, and 1 of Each Catalyst (Each
            upgrade requires all 3)
          </Content>
        </GridItem>
        <GridItem>
          <Title> - Battle</Title>
          <Content>
            <ul>
              <li>
                Use 1 of each of your NFTs to enter the Block Wars battle. (link
                to Blockwars / wallet connect?)
              </li>
              <li>
                Once registered you can use the NFTs to participate in daily
                battles (every 12 hours).
              </li>
              <li>
                Choose to allocate them to be a “Hero” or a “Villain” and attach
                a Catalyst for stats buff. Boost (available 15 minutes before
                each battle) and double your stats.
              </li>
            </ul>
          </Content>
        </GridItem>
      </GridContainer>
    </TeamsLists>
  );
};
