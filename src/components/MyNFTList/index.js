import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import { algoIndexer } from "../../utils/algo";
import { useTheme } from "styled-components";
// import { useWindowSize } from "../../hooks/useWindowSize";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { CardContainer } from "./styled";
import { Link } from "react-router-dom";

const override = css`
  margin-top: 30vh;
`;

export const MyNFTList = () => {
  let [loading, setLoading] = useState(true);

  const theme = useTheme();
  // const { width } = useWindowSize();
  const [ownedAssets, setOwnedAssets] = useState([]);

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
      }));
    setOwnedAssets(ownAssets);
    setLoading(false);
  };

  // const getAssetInfo = async (assetId) => {
  //   const { asset } = await algoIndexer.lookupAssetByID(assetId).do();
  //   return { ...asset.params, assetId };
  // };

  useEffect(() => {
    searchForOwnedAssets();
  }, []);

  return (
    <CardContainer>
      <h1>MY NFT'S</h1>
      <Container style={{ height: "100%" }}>
        <Row>
          {ownedAssets.map((asset) => (
            <Col key={asset.id} style={{ textAlign: "center" }}>
              <p>{asset.name}</p>
              <Link to={`/nfts/${asset.id}`}>
                <img src={asset.image} width="240" />
              </Link>
              <p>ASA ID | {asset.id}</p>
            </Col>
          ))}
        </Row>
      </Container>
      <PropagateLoader
        color={"#ffffff"}
        loading={loading}
        css={override}
        size={50}
      />
    </CardContainer>
  );
};
