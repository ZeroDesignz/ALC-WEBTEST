import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useTheme } from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import { SwiperComponent } from "../Swiper";
import {
  Container,
  Content,
  LogoWrapper,
  ALCtext,
  OverBack,
  ALCItem,
} from "./styles";

export const VisionCard = (props) => {
  const theme = useTheme();
  const { width } = useWindowSize();
  // const { title, content } = props;

  const [flagObj, setFlagObj] = useState({
    rare: true,
    epic: false,
    legend: false,
    neap: false,
  });

  const upDateFlag = (type) => {
    let newObj = {
      rare: false,
      epic: false,
      legend: false,
      neap: false,
    };
    newObj[type] = true;
    setFlagObj(newObj);
  };
  return (
    <Container
      bgimage={width < 480 ? theme.images.alcBgMobile : theme.images.alcBg}
      id="mission"
    >
      <Content>
        <LogoWrapper>
          <h1>Stake</h1>
          <p>
            Keep your NFTs in your wallet and receive weekly drops of
            AlgoLeagues Coin! (Staking snapshots are done weekly on Sundays &
            Drops on Mondays by 5pm EST
          </p>
        </LogoWrapper>
        <ALCtext>
          <ALCItem>
            {flagObj.rare === true ? (
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => upDateFlag("rare")}
              />
            ) : (
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => upDateFlag("rare")}
              />
            )}{" "}
            Rares (Bronze) 50
            {flagObj.rare === true && <SwiperComponent type="Rare" />}
          </ALCItem>
          <ALCItem>
            {flagObj.epic === true ? (
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => upDateFlag("epic")}
              />
            ) : (
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => upDateFlag("epic")}
              />
            )}{" "}
            Epic (Silver) 100
            {flagObj.epic === true && <SwiperComponent type="Epic" />}
          </ALCItem>
          <ALCItem>
            {flagObj.legend === true ? (
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => upDateFlag("legend")}
              />
            ) : (
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => upDateFlag("legend")}
              />
            )}{" "}
            Legend (Gold) 200
            {flagObj.legend === true && <SwiperComponent type="Legend" />}
          </ALCItem>
          <ALCItem>
            {flagObj.neap === true ? (
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => upDateFlag("neap")}
              />
            ) : (
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => upDateFlag("neap")}
              />
            )}{" "}
            Neapolitan (Neapolitan) 350
            {flagObj.neap === true && <SwiperComponent type="Neap" />}
          </ALCItem>
        </ALCtext>
      </Content>
      <OverBack />
    </Container>
  );
};
