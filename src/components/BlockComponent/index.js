import React, { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { algoIndexer } from "../../utils/algo";
import { SwiperComponent } from "./Swiper";
import PropagateLoader from "react-spinners/PropagateLoader";
import {
  ActiveText,
  AnimationWrapper,
  Container,
  Content,
  ContentBody,
  ContentFooter,
  FooterBtn,
  ImgWrapper,
  LeftBody,
  LeftDesc,
  LeftTitle,
  RightBody,
  RightHeader,
  SelType,
  StatusText,
  TextWrapper,
} from "./styled";
import { css } from "@emotion/react";

const override = css`
  margin-top: 30vh;
`;

export const BlockComponent = () => {
  const theme = useTheme();

  let [loading, setLoading] = useState(true);
  const [activeNFT, setActiveNFT] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ownedAssets, setOwnedAssets] = useState([]);
  const [viewMode, setViewMode] = useState("villian");
  const [animationImage, setAnimationImage] = useState(
    theme.videos.securityVideo
  );
  const selNftFunc = (index) => {
    setActiveNFT(ownedAssets[index]);
    setActiveIndex(index);
  };

  const searchForOwnedAssets = async () => {
    let walletAddress = JSON.parse(
      window.localStorage.getItem("leaguesaddress")
    );

    const { assets } = await algoIndexer
      .lookupAccountAssets(walletAddress)
      .do();
    const ownAssets = assets
      .filter(
        (a) =>
          a.amount > 0 &&
          // !a.deleted &&
          // !a["is-frozen"] &&
          theme.ASAInfos.map(function (e) {
            return e.id;
          }).indexOf(a["asset-id"]) > 0
      )
      .map((a) => ({
        id: a["asset-id"],
        image: theme.ASAInfos.find((asa) => asa.id === a["asset-id"]).image,
        name: theme.ASAInfos.find((asa) => asa.id === a["asset-id"]).name,
        health: theme.ASAInfos.find((asa) => asa.id === a["asset-id"]).health,
        attack: theme.ASAInfos.find((asa) => asa.id === a["asset-id"]).attack,
        defense: theme.ASAInfos.find((asa) => asa.id === a["asset-id"]).defense,
      }));
    setOwnedAssets(ownAssets);
    setActiveNFT(ownAssets[0]);
    setLoading(false);
  };

  const changeImgType = (value) => {
    const video = document.getElementById('block-video')
    if (value === "security") {
      setAnimationImage(theme.videos.securityVideo);
      video.setAttribute('src',theme.videos.securityVideo)
    }
    if (value === "decentralization") {
      setAnimationImage(theme.videos.decentralizationVideo);
      video.setAttribute('src',theme.videos.decentralizationVideo)
    }
    if (value === "scalability") {
      setAnimationImage(theme.videos.scalabilityVideo);
      video.setAttribute('src',theme.videos.scalabilityVideo)
    }
    // if(animationImage === theme.images.blockWarAnimation){
    //   setAnimationImage(theme.images.blockWarAnimation2)
    // }else{
    //   setAnimationImage(theme.images.blockWarAnimation)
    // }
    //   let data = []
    // switch (value) {
    //   case "epic":
    //     setImgData(epicImgDetail);
    //     data = epicImgDetail;
    //     break;
    //   case "legend":
    //     setImgData(legendImgDetail);
    //     data = legendImgDetail;
    //     break;
    //   case "neap":
    //     setImgData(neapImgDetail);
    //     data = neapImgDetail;
    //     break;
    //   case "rare":
    //     setImgData(rareImgDetail);
    //     data = rareImgDetail;
    //     break;
    //   default:
    //     setImgData(epicImgDetail);
    //     data = epicImgDetail;
    //     break;
    // }
    // setActiveNFT(data[activeIndex]);
  };

  useEffect(() => {
    searchForOwnedAssets();
  }, []);

  return (
    <Container>
      <StatusText>STATUS</StatusText>
      <Content bgimage={theme.images.blockWarBackground}>
        <ContentBody>
          <TextWrapper>
            {loading === true ? (
              // <PropagateLoader
              //   color={"#ffffff"}
              //   loading={loading}
              //   css={override}
              //   size={15}
              // />
              <></>
            ) : (
              <>
                <LeftBody>
                  <LeftTitle>NFTS</LeftTitle>
                  <LeftDesc>
                    <SwiperComponent
                      data={ownedAssets}
                      sendActiveIndex={selNftFunc}
                    />
                  </LeftDesc>
                </LeftBody>
                <LeftBody>
                  <LeftTitle>HEALTH</LeftTitle>
                  <LeftDesc>: {activeNFT.health}</LeftDesc>
                </LeftBody>
                <LeftBody>
                  <LeftTitle>ATTACK</LeftTitle>
                  <LeftDesc>: {activeNFT.attack}</LeftDesc>
                </LeftBody>
                <LeftBody>
                  <LeftTitle>DEFENSE</LeftTitle>
                  <LeftDesc>: {activeNFT.defense}</LeftDesc>
                </LeftBody>
                <LeftBody>
                  <LeftTitle>CATALYST</LeftTitle>
                  <LeftDesc>
                    <SelType onChange={(e) => changeImgType(e.target.value)}>
                      <option value="security">Security</option>
                      <option value="decentralization">Decentralization</option>
                      <option value="scalability">Scalability</option>
                    </SelType>
                  </LeftDesc>
                </LeftBody>
              </>
            )}
          </TextWrapper>
          <ImgWrapper>
            <RightHeader>
              <h1>BOOST : NOT ACTIVE</h1>
            </RightHeader>
            <RightBody>
              <AnimationWrapper>
                <ActiveText>
                  <StatusText>ACTIVE</StatusText>
                </ActiveText>
                <video id="block-video" autoPlay muted loop>
                  <source src={animationImage} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </AnimationWrapper>
            </RightBody>
          </ImgWrapper>
        </ContentBody>
        {viewMode === "villian" ? (
          <ContentFooter>
            <FooterBtn
              style={{ backgroundColor: "#ECBF1F", color: "#000" }}
              onClick={() => setViewMode("hero")}
            >
              SIDE
            </FooterBtn>
            <FooterBtn>VILLIANS</FooterBtn>
          </ContentFooter>
        ) : (
          <ContentFooter style={{ backgroundColor: "#009AA4" }}>
            <FooterBtn>Hero</FooterBtn>
            <FooterBtn
              style={{ backgroundColor: "#ECBF1F", color: "#000" }}
              onClick={() => setViewMode("villian")}
            >
              SIDE
            </FooterBtn>
          </ContentFooter>
        )}
      </Content>
    </Container>
  );
};
