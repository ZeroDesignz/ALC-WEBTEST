import React from "react";
import ReactDOM from "react-dom";
import { Router } from "./router";
import { ThemeProvider } from "./contexts/ThemeContext";

import theme from "./theme.json";

import headerOver from "./assets/images/headerOver.png";
import headerLogo from "./assets/images/logo-main.png";
import headerTitle from "./assets/images/header-title.png";
import homeBg from "./assets/images/home-bg.png";
import stillBkg from "./assets/images/still-bkg.png";
import copyrightBg from "./assets/images/copyleft-bg.png";
import welcomeBg from "./assets/images/welcome-bg.png";
import alcBg from "./assets/images/alc-section-back.png";
import alcBgMobile from "./assets/images/alc-section-back-mobile.png";
import alcImg from "./assets/images/alcLogo.png";
import sidebarOver from "./assets/images/sideback.png";
import welcomeMobileBg from "./assets/images/welcome-bg-mobile.png";
import blogBack from "./assets/images/blogBack.png";
import blogBackMobile from "./assets/images/blogBackMobile.png";
import dumiUser from "./assets/dummies/dumiUser.png";
import partnerBack from "./assets/images/partnerBack.png";
import teamListBack from "./assets/images/teamBack.png";
import welcomeShape from "./assets/images/welcome-shape.png";
import joinSection from "./assets/images/join_section.png";
import joinTextBack from "./assets/images/joinTextBack.png";
import storyImg1 from "./assets/images/story/1.jpg";
import storyImg2 from "./assets/images/story/2.jpg";
import storyImg3 from "./assets/images/story/3.jpg";
import storyImg4 from "./assets/images/story/4.jpg";
import storyImg5 from "./assets/images/story/5.jpg";
import storyImg6 from "./assets/images/story/6.jpg";
import storyImg7 from "./assets/images/story/7.jpg";
import storyImg8 from "./assets/images/story/8.jpg";
import storyImg9 from "./assets/images/story/9.jpg";
import storyImg10 from "./assets/images/story/10.jpg";
import storyImg11 from "./assets/images/story/11.jpg";
import storyImg12 from "./assets/images/story/12.jpg";
import storyImg13 from "./assets/images/story/13.jpg";
import storyImg14 from "./assets/images/story/14.jpg";
import storyImg15 from "./assets/images/story/15.jpg";
import storyImg16 from "./assets/images/story/16.jpg";
import storyImg17 from "./assets/images/story/17.jpg";
import storyImg18 from "./assets/images/story/18.jpg";
import storyImg19 from "./assets/images/story/19.jpg";
import storyImg20 from "./assets/images/story/20.jpg";
import storyImg21 from "./assets/images/story/21.jpg";
import storyImg22 from "./assets/images/story/22.jpg";
import storyImg23 from "./assets/images/story/23.jpg";
import storyImg24 from "./assets/images/story/24.jpg";
import storyImg25 from "./assets/images/story/25.jpg";
import storyImg26 from "./assets/images/story/26.jpg";
import storyImg27 from "./assets/images/story/27.jpg";
import storyImg28 from "./assets/images/story/28.jpg";
import storyImg29 from "./assets/images/story/29.jpg";
import storyImg30 from "./assets/images/story/30.jpg";
import storyImg31 from "./assets/images/story/31.jpg";
import storyImg32 from "./assets/images/story/32.jpg";
import storyImg33 from "./assets/images/story/33.jpg";
import storyImg34 from "./assets/images/story/34.jpg";
import storyImg35 from "./assets/images/story/35.jpg";
import storyImg36 from "./assets/images/story/36.jpg";
import storyImg37 from "./assets/images/story/37.jpg";
import storyImg38 from "./assets/images/story/38.jpg";
import storyImg39 from "./assets/images/story/39.jpg";
import groupTop from "./assets/images/GroupTop.png";
import groupBottom from "./assets/images/GroupBottom.png";

import menuWhite from "./assets/icons/menuIcon-white.svg";
import menuBlue from "./assets/icons/menuIcon-white.svg";
import twitterWhite from "./assets/icons/twitter-white.svg";
import twitterBlue from "./assets/icons/twitter-blue.svg";
import instagramWhite from "./assets/icons/instagram-white.svg";
import instagramBlue from "./assets/icons/instagram-blue.svg";
import facebookWhite from "./assets/icons/facebook-white.svg";
import facebookBlue from "./assets/icons/facebook-blue.svg";

import buttonPeraConnect from "./assets/icons/button-pera-connect.svg"
import nftExplorer from "./assets/icons/nftExplorer.png";
import nftCard from "./assets/images/nftCard.png";
import storyCard from "./assets/images/storyCard.png";
import gem from "./assets/images/gem.png";
import ab2 from "./assets/images/ab2.png";
import blockWarBackground from "./assets/images/block-war.png";
import blockWarAnimation from "./assets/images/block-card.gif";
import blockWarAnimation2 from "./assets/images/block-card2.gif";
import blockWarCardBack1 from "./assets/images/block-war-card1.png";
import blockWarCardBack2 from "./assets/images/block-war-card2.png";
import howToTop from "./assets/images/howToTop.png";
import howToBottom from "./assets/images/howToBottom.png";
import neapBackground from "./assets/images/neapolitan-background.png";
import legendBackground from "./assets/images/legend-background.png";
import epicBackground from "./assets/images/epic-background.png";
import rareBackground from "./assets/images/rare-background.png";
import myalgoLogo from "./assets/images/myalgo-logo.png";
import walletConnectLogo from './assets/images/wallet-connect-logo.png';
import securityVideo from "./assets/videos/Security_Catalyst.mp4";
import decentralizationVideo from "./assets/videos/Decentralization_Catalyst.mp4";
import scalabilityVideo from "./assets/videos/Scalabilty_Catalyst.mp4";
import alhomeVideo from "./assets/videos/algoanimate.mp4";
import peraWalletConnet from './assets/images/pera-wallet-logo.png';
/**
 * Theme images
 */
theme.images = {
  myalgoLogo,
  peraWalletConnet,
  walletConnectLogo,
  headerOver,
  headerLogo,
  headerTitle,
  homeBg,
  sidebarOver,
  stillBkg,
  copyrightBg,
  welcomeBg,
  welcomeMobileBg,
  welcomeShape,
  alcBg,
  alcBgMobile,
  blogBack,
  blogBackMobile,
  alcImg,
  partnerBack,
  teamListBack,
  joinSection,
  joinTextBack,
  storyImg1,
  storyImg2,
  storyImg3,
  storyImg4,
  storyImg5,
  storyImg6,
  storyImg7,
  storyImg8,
  storyImg9,
  storyImg10,
  storyImg11,
  storyImg12,
  storyImg13,
  storyImg14,
  storyImg15,
  storyImg16,
  storyImg17,
  storyImg18,
  storyImg19,
  storyImg20,
  storyImg21,
  storyImg22,
  storyImg23,
  storyImg24,
  storyImg25,
  storyImg26,
  storyImg27,
  storyImg28,
  storyImg29,
  storyImg30,
  storyImg31,
  storyImg32,
  storyImg33,
  storyImg34,
  storyImg35,
  storyImg36,
  storyImg37,
  storyImg38,
  storyImg39,
  nftCard,
  storyCard,
  ab2,
  gem,
  blockWarBackground,
  blockWarAnimation,
  blockWarAnimation2,
  blockWarCardBack1,
  blockWarCardBack2,
  groupTop,
  groupBottom,
  howToTop,
  howToBottom,
  neapBackground,
  legendBackground,
  epicBackground,
  rareBackground,
};

theme.dummies = {
  dumiUser,
};

theme.icons = {
  menuWhite,
  menuBlue,
  twitterWhite,
  twitterBlue,
  instagramWhite,
  instagramBlue,
  facebookWhite,
  facebookBlue,
  nftExplorer,
  buttonPeraConnect,
};

theme.videos = {
  securityVideo,
  decentralizationVideo,
  scalabilityVideo,
  alhomeVideo,
};

const RouteApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

const wrapper = document.getElementById("root");
ReactDOM.render(<RouteApp />, wrapper);
