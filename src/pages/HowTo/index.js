import React from "react";
import { HelmetTags } from "../../components/HelmetTags";
import { MissionCard } from "../../components/MissionCard";
import { TeamCard } from "../../components/TeamCard";
import { VisionCard } from "../../components/VisionCard";
import { Container } from "./styled";

export const HowTo = () => {
  return (
    <Container>
      <HelmetTags page="howto" />
      <MissionCard
        title={`Collect`}
        content={`You can purchase our Character & Catalyst NFTs on (AB2 Logo & link) https://ab2.gallery/address/PZNGYF4Y25GGO674BW4CRDHFKOKHMHZXSFXIKMYPEJCQAUTDH52WV24XTY & (GEMs Logo & Link	 or using the ALCNFTSWAP (Link to ALCNFTSWAP on site - wallet connect?)`}
      />
      <VisionCard />
      <TeamCard />
    </Container>
  );
};
