import React, { useState } from "react";
import { useTheme } from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  CardContainer,
  DetailBody,
  DetailText,
  DetailTitle,
  NFTCardItem,
  NFTDetails,
  NFTImg,
  SubDetailList,
  SubDetailText,
  SubItems,
  SubNFTImg,
  SubNFTList,
} from "./styled";
import { BioSwiper } from "../BioSwiper";
import { useLocation } from "react-router-dom";
export default function NFTCardList() {
  const theme = useTheme();
  const { width } = useWindowSize();
  const NFTList = theme.ASAInfos;
  const LegendList = theme.legendItems;
  const oriList = theme.oriItems;

  const [activNFT, setActiveNFT] = useState(oriList[0]);
  const [activeColor, setActiveColor] = useState("darkgray");
  const [selectedNFT, setSelectedNFT] = useState(0);
  const [activeSubDetail, setActiveSubDetail] = useState(NFTList[0]);
  const [neapNFT, setNeapNFT] = useState(NFTList[0]);
  const [legendNFT, setLegendNFT] = useState(NFTList[0]);
  const [epicNFT, setEpicNFT] = useState(NFTList[0]);
  const [rareNFT, setRareNFT] = useState(NFTList[0]);

  const selNftFunc = (index) => {
    setActiveNFT(oriList[index]);
    setSelectedNFT(index);
    setNeapNFT(
      NFTList.find((el) => {
        return el.order === NFTList[index].order && el.type === "Neapolitan";
      })
    );
    setLegendNFT(
      NFTList.find((el) => {
        return el.order === NFTList[index].order && el.type === "Legendary";
      })
    );
    setEpicNFT(
      NFTList.find((el) => {
        return el.order === NFTList[index].order && el.type === "Epic";
      })
    );
    setRareNFT(
      NFTList.find((el) => {
        return el.order === NFTList[index].order && el.type === "Rare";
      })
    );
    setActiveSubDetail(NFTList[index]);
  };

  const showImgDetail = (type) => {
    switch (type) {
      case "Neapolitan":
        setActiveSubDetail(neapNFT);
        setActiveColor("red");
        break;
      case "Legendary":
        setActiveSubDetail(legendNFT);
        setActiveColor("gold");
        break;
      case "Epic":
        setActiveSubDetail(epicNFT);
        setActiveColor("darkgray");
        break;
      case "Rare":
        setActiveSubDetail(rareNFT);
        setActiveColor("brown");
        break;
      default:
        setActiveSubDetail(neapNFT);
        setActiveColor("red");
        break;
    }
  };

  return (
    <CardContainer>
      <NFTCardItem bgimage={
          width < 768 ? theme.images.alcBgMobile : theme.images.nftCard
        }>
        {/* <NFTImg src={`/${activNFT.image}`} bgColor={activeColor} /> */}
        <NFTImg src={`/${activNFT.image}`} />
        <NFTDetails>
          <DetailText>
            <DetailTitle>CLASS : </DetailTitle>
            <DetailBody>{activNFT.class}</DetailBody>
          </DetailText>
          <DetailText>
            <DetailTitle>LAST SEEN : </DetailTitle>
            <DetailBody>{activNFT.lastSeen}</DetailBody>
          </DetailText>
          <DetailText>
            <DetailTitle>POWER & ABILITIES : </DetailTitle>
            <DetailBody>{activNFT.power}</DetailBody>
          </DetailText>
          <DetailText>
            <DetailTitle>WEAPONS : </DetailTitle>
            <DetailBody>{activNFT.weapons}</DetailBody>
          </DetailText>
          <DetailText>
            <DetailTitle>WEAKNESS : </DetailTitle>
            <DetailBody>{activNFT.weakness}</DetailBody>
          </DetailText>
          <DetailText>
            <DetailTitle>BLOCKCHAIN OF OPERATION : </DetailTitle>
            <DetailBody>{activNFT.blockchain}</DetailBody>
          </DetailText>
          <DetailText>
            <DetailTitle>HISTORY : </DetailTitle>
            <DetailBody>{activNFT.history}</DetailBody>
          </DetailText>
        </NFTDetails>
        <SubItems>
          <SubNFTList>
            <SubNFTImg
              // src={epicNFT.image}
              src={theme.images.epicBackground}
              onClick={() => showImgDetail("Epic")}
            />
            <SubNFTImg
              // src={neapNFT.image}
              src={theme.images.neapBackground}
              onClick={() => showImgDetail("Neapolitan")}
            />
            <SubNFTImg
              // src={legendNFT.image}
              src={theme.images.legendBackground}
              onClick={() => showImgDetail("Legendary")}
            />
            <SubNFTImg
              // src={rareNFT.image}
              src={theme.images.rareBackground}
              onClick={() => showImgDetail("Rare")}
            />
          </SubNFTList>
          <SubDetailList>
            <SubDetailText>
              <p>CARD : </p>
              {activeSubDetail.type}
            </SubDetailText>
            <SubDetailText>
              <p>HEALTH : </p>
              {activeSubDetail.health}
            </SubDetailText>
            <SubDetailText>
              <p>ATTACK : </p>
              {activeSubDetail.attack}
            </SubDetailText>
            <SubDetailText>
              <p>DEFENSE : </p>
              {activeSubDetail.defense}
            </SubDetailText>
          </SubDetailList>
        </SubItems>
      </NFTCardItem>
      <BioSwiper data={LegendList} sendActiveIndex={selNftFunc} />
    </CardContainer>
  );
}
