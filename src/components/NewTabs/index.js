import React, { useState } from "react";
import { useTheme } from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Container, Content, Tab, Face1, Textcontent, Stuff, slider, Topic, List, Text } from "./styled";

const InfoTab = () => {
  // Get the theme from styled-components
  const theme = useTheme();

  // Get the width of the window using a custom hook
  const { width } = useWindowSize();

  // Store the active tab in state
  const [activeTab, setActiveTab] = useState("collect");

  // Function to handle tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Calculate the slider position based on the activeTabIndex
  const getSliderPosition = () => {
    const offset = 100 * activeTabIndex;
    return `translatey(${offset}%)`;
  };

  // Find the index of the active tab in the array of tabs
  const activeTabIndex = ["collect", "stake", "battle", "upgrade", "trade", "wear"].indexOf(activeTab);

  // State to handle the isActive property
  const [isActive, setIsActive] = useState(false);

  return (
    <Container id="infotab">
      {/* Display the topic with a header */}
      <Topic>
        <h1>The NFT's Utility</h1>
        {/* <h1>What you can do with Algo Leagues NFTs</h1> */}
      </Topic>

      <Content className="info">
        <List>
          {/* Render radio inputs for each tab */}
          {["collect", "stake", "battle", "upgrade", "trade", "wear"].map((tab) => (
            <React.Fragment key={tab}>
              <input
                type="radio"
                name="slider"
                checked={activeTab === tab}
                id={tab}
                onChange={() => handleTabChange(tab)}
              />
              <label htmlFor={tab} className={activeTab === tab ? "active" : ""}>
                {/* Display the name of the tab */}
                <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
              </label>
            </React.Fragment>
          ))}
          
          {/* Render the slider with the appropriate style */}
          <slider
            className="slider"
            style={{
              transform: getSliderPosition(),
            }}
          ></slider>
        </List>

        {/* Content for each tab */}
        <Textcontent>
          {/* "Collect" tab */}
          <Text className={activeTab === "collect" ? "active" : ""}>
            {/* <h1 className="title">Collect</h1> */}
            <p>Algo Leagues is a collection of 19 unique character NFTs on the Algorand blockchain.</p><p> Each character has its own backstory, traits, and statistics, making them a unique addition to your NFT collection.</p>
            <img src="images/collection.png" alt=" collection icon" style={{ width: "60vmin" }}></img>
          </Text>

          {/* "Stake" tab */}
          <Text className={activeTab === "stake" ? "active" : ""}>
            <p>The Algo Leagues NFTs can be staked on the platform, allowing you to earn rewards in the form of ALC (Algo Leagues Coin).</p><p> By staking your NFTs, you're also contributing to the security and decentralization of the Algo Leagues.</p>
            <img src="images/stakeIcon.png" alt=" collection icon" />
          </Text>

          {/* "Battle" tab */}
          <Text className={activeTab === "battle" ? "active" : ""}>
            <p>Algo Leagues also features a unique battle simulation game called Block Wars.</p><p>Battle your Algo Leagues characters against other players' characters for a chance to win rewards in ALC and other partner tokens.</p><p> You can also equip your characters with Catalyst NFTs, which provide a 33% boost to attack, defense, or health during battles.</p>
            <img src="images/battleIcon.png" alt=" collection icon" />
          </Text>

          {/* "Upgrade" tab */}
          <Text className={activeTab === "upgrade" ? "active" : ""}>
            <p>Want to boost the power of your Algo Leagues characters? You can upgrade them by utilizing 3 catalysts (1 of each), create a higher rarity NFT.</p><p> For example, 3 Catalysts earns a rare, a rare and 3 catalysts earns an Epic, and 3 catalysts and Epic earns a Legend.</p>
            <img src="images/upgradeIcon.png" alt=" collection icon" />
          </Text>

          {/* "Trade" tab */}
          <Text className={activeTab === "trade" ? "active" : ""}>
            <p>Algo Leagues NFTs can be bought and sold on the Algorand blockchain through various marketplaces like Algogems.io. </p><p>Trade your NFTs with other collectors to complete your collection or to upgrade your characters.</p>
            <img src="images/tradeIcon.png" alt=" collection icon" />
          </Text>

          {/* "Wear" tab */}
          <Text className={activeTab === "wear" ? "active" : ""}>
            <p>Algo Leagues characters aren't just limited to the virtual world, you can also showcase your NFTs in the physical world with Algo Leagues merchandise.</p><p> Show off your favorite characters with Algo Leagues apparel, stickers, and more.</p>
            <img src="images/wearIcon.png" alt=" collection icon" />
          </Text>
        </Textcontent>
      </Content>
    </Container>
  );
};

export default InfoTab;
