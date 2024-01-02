import React from "react";
import { HelmetTags } from "../../components/HelmetTags";
import  NFTCardList  from "../../components/NFTCardList";
import { NFTContainer } from "./styled";

export const NFTs = () => {
  return (
    <NFTContainer>
      <HelmetTags page="bio" />
      <NFTCardList />
    </NFTContainer>
  );
};
