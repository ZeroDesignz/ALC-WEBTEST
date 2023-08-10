import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetTags } from "./components/HelmetTags";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Welcome } from "./pages/Welcome";
import { Footer } from "./components/Footer";
import { NFTs } from "./pages/NFTs";
import { HowTo } from "./pages/HowTo";
import { MyNFT } from "./pages/MyNFT";
import { BlockWars } from "./pages/BlockWars";
import { Upgrade } from "./pages/Upgrade";
import Story from "./pages/Story";

export const App = () => {
  return (
    <>
      <HelmetTags />
      <Header />
      <Routes>
        <Route exact path="/" element={<Welcome />}>
          <Route exact path="/home" element={<Home />} />

          <Route exact path="/nfts" element={<NFTs />} />
          <Route exact path="/nfts/:id" element={<NFTs />} />

          <Route exact path="/blockwars" element={<BlockWars />} />

          <Route exact path="/howto" element={<HowTo />} />

          <Route exact path="/upgrade" element={<Upgrade />} />

          <Route exact path="/mynft" element={<MyNFT />} />

          <Route exact path="/story" element={<Story />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};
