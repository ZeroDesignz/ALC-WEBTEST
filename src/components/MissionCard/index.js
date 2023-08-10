import React from "react";
import { useTheme } from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  Container,
  Content,
  ContentImg,
  ContentText,
  OverBack,
  SubContent,
} from "./styled";

export const MissionCard = (props) => {
  const theme = useTheme();
  const { width } = useWindowSize();
  const { title } = props;
  return (
    <Container id="nftItem">
      <Content
        bgimage={
          width < 480 ? theme.images.welcomeMobileBg : theme.images.welcomeBg
        }
      >
        <h1>{title}</h1>
        <SubContent>
          <ContentText>
            You can purchase our Character & Catalyst NFTs on
          </ContentText>
          <ContentImg>
            <a
              href="https://ab2.gallery/address/PZNGYF4Y25GGO674BW4CRDHFKOKHMHZXSFXIKMYPEJCQAUTDH52WV24XTY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={theme.images.ab2} />
            </a>
            <a
              href="https://algogems.io/gallery/AlgoLeaguesOfficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={theme.images.gem} />
            </a>
          </ContentImg>
        </SubContent>
        {/* <SubContent>
          or using the ALCNFTSWAP (Link to ALCNFTSWAP on site - wallet connect?)
        </SubContent> */}
      </Content>
      <OverBack bgimage={width > 1024 && theme.images.welcomeShape} />
    </Container>
  );
};
