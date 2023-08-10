import React from "react";
import { useTheme } from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Container, Content, Tab, Face1, Face2, Stuff} from "./styled";
const InfoTab = () => {
    const theme = useTheme();
    const { width } = useWindowSize();
  return (
    <Container id="infotab">
      <Content
        // bgimage={
        //   width < 480 ? theme.images.welcomeMobileBg : theme.images.welcomeBg
        // }
      >
        <Tab>
            <Face1>
              <Stuff>
              <h1>Collect</h1>
              </Stuff>
            </Face1>
            <Face2>
              <Stuff>
              <span>
              <h1>Collect</h1> 
              <img src="ALC-WEBTEST/images/collection.png" alt=" collection icon" />
              <text>
              <p>Algo Leagues is a collection of 19 unique character NFTs on the Algorand blockchain. Each character has its own backstory, traits, and statistics, making them a unique addition to your NFT collection.</p>
              </text>
              </span>
              </Stuff>
            </Face2>
        </Tab>

        <Tab>
            <Face1>
              <Stuff>
              <h1>Stake</h1>
              </Stuff>
            </Face1>
            <Face2>
              <Stuff>
              <span>
              <h1>Stake</h1>
              <img src="ALC-WEBTEST/images/stakeIcon.png" alt=" collection icon" />
              <text>
              <p>The Algo Leagues NFTs can be staked on the platform, allowing you to earn rewards in the form of ALC (Algo Leagues Coin). By staking your NFTs, you're also contributing to the security and decentralization of the Algo Leagues.</p>
              </text>
              </span>
              </Stuff>
            </Face2>
          </Tab>

          <Tab>
            <Face1>
              <Stuff>
              <h1>Battle</h1>
              </Stuff>
            </Face1>
            <Face2>
              <Stuff>
              <span> 
              <h1>Battle</h1>
              <img src="ALC-WEBTEST/images/battleIcon.png" alt=" collection icon" />
              <text>
              <p>Algo Leagues also features a unique battle simulation game called Block Wars. Battle your Algo Leagues characters against other players' characters for a chance to win rewards in ALC and other partner tokens. You can also equip your characters with Catalyst NFTs, which provide a 33% boost to attack, defense, or health during battles.</p>
              </text>
              </span> 
              </Stuff>
            </Face2>
          </Tab>

          <Tab>
            <Face1>
              <Stuff>
              <h1>Upgrade</h1>
              </Stuff>
            </Face1>
            <Face2>
              <Stuff>
              <span> 
              <h1>Upgrade</h1>
              <img src="ALC-WEBTEST/images/upgradeIcon.png" alt=" collection icon" />
              <text>
              <p>Want to boost the power of your Algo Leagues characters? You can upgrade them by utilizing 3 catalysts (1 of each), create a higher rarity NFT. For example, 3 Catalysts earns a rare, a rare and 3 catalysts earns an Epic, and 3 catalysts and Epic earns a Legend.</p>
              </text>
              </span> 
              </Stuff>
            </Face2>
          </Tab>

          <Tab>
            <Face1>
              <Stuff>
              <h1>Trade</h1>
              </Stuff>
            </Face1>
            <Face2>
              <Stuff>
              <span> 
              <h1>Trade</h1>
              <img src="ALC-WEBTEST/images/tradeIcon.png" alt=" collection icon" />
              <text>
              <p>Algo Leagues NFTs can be bought and sold on the Algorand blockchain through various marketplaces like Algogems.io. Trade your NFTs with other collectors to complete your collection or to upgrade your characters.</p>              </text>
              </span> 
              </Stuff>
            </Face2>
          </Tab>

          <Tab>
            <Face1>
              <Stuff>
              <h1>Wear</h1>
              </Stuff>
            </Face1>
            <Face2>
              <Stuff>
              <span> 
              <h1>Wear</h1>
              <img src="ALC-WEBTEST/images/wearIcon.png" alt=" collection icon" />
              <text>
              <p>Algo Leagues characters aren't just limited to the virtual world, you can also showcase your NFTs in the physical world with Algo Leagues merchandise. Show off your favorite characters with Algo Leagues apparel, stickers, and more.</p>              
              </text>
              </span> 
              </Stuff>
            </Face2>
          </Tab>



        
        
      </Content>
    </Container>
  );
};

export default InfoTab;
