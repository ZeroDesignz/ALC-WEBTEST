import React, { useState, useEffect } from "react";
import { algoIndexer } from "../../utils/algo";
import { useTheme } from "styled-components";
import _ from "lodash";
import { BalanceWrapper, Container } from "./styled";
import WalletConnect from "@walletconnect/client";

export const Balancebar = (props) => {
  const theme = useTheme();
  const [algoAmount, setAlgoAmount] = useState(0);
  const [alcAmount, setAlcAmount] = useState(0);
  const [nftAmount, setNftAmount] = useState(0)

  // const numberWithCommas = (x) => {
    // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // } 
  useEffect(() => {
    const getBalance = async () => {
      let {account} = await algoIndexer.lookupAccountByID(props.accountAddress).do();
      setAlgoAmount(account.amount / (10**6))
      let alc = account.assets.find(a => a['asset-id'] === 445905873)
      const ownAssets = account.assets
      .filter(
        (a) =>
          a.amount > 0 &&
          theme.ASAInfos.map(function (e) {
            return e.id;
          }).indexOf(a["asset-id"]) > 0
      )
      .map((a) => ({
        id: a["asset-id"],
        amount:a['amount']
      }));
      setAlcAmount(alc.amount / (10**6))
      let nfts = _.sumBy(ownAssets,function(asset){return asset.amount})
      setNftAmount(nfts)
    };
    getBalance();
  }, []);

  console.log('asset-id');
  return (
    
    <Container>
      <BalanceWrapper>
        <span>ALGO - {algoAmount}</span>
        <span>ALC - {alcAmount}</span>
        <span>NFTS - {nftAmount}</span>
      </BalanceWrapper>
    </Container>
  );
};
