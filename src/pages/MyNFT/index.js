import React from "react";
import { HelmetTags } from "../../components/HelmetTags";
import { MyNFTList } from "../../components/MyNFTList";
import { Container } from "./styled";
export const MyNFT = () => {
  return (
    <Container>
      <HelmetTags page="mynfts" />
      <MyNFTList />
    </Container>
  );
};
