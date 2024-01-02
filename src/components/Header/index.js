import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext/index";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Navbar } from "../Navbar";
import { MobileMenu } from "../MobileMenu";

import { useNavigate, useLocation } from "react-router-dom";
import {
  HeaderWrapper,
  Container,
  HeaderLogo,
  TitleImg,
  BackOver,
  HeaderContent,
  NavWrapper,
  MobileMenuWrapper,
  BoostBtn,
  BlockTimes,
  BlockText,
  WalletBtn,
  Logo,
} from "./styles";
import { Balancebar } from "../Balancebar";
import { MobileSideBar } from "../MobileSideBar";
import QRCodeModal from "@walletconnect/qrcode-modal";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";

import { loadStdlib } from "@reach-sh/stdlib";
import { PeraWalletConnect } from "@perawallet/connect";
import { ALGO_MakePeraConnect as MakePeraConnect } from "@reach-sh/stdlib";
// import { ALGO_MakeWalletConnect as MakeWalletConnect } from "@reach-sh/stdlib"
import WalletConnect from "@walletconnect/client";
import UniversalProvider from "@walletconnect/universal-provider";



const reach = loadStdlib("ALGO");

reach.setWalletFallback(
  reach.walletFallback({
    providerEnv: "MainNet",
    WalletConnect: MakePeraConnect(PeraWalletConnect),
  })
);

//  Initialize the provider
// const provider = await UniversalProvider.init({
//   logger: "info",
//   relayUrl: "wss://relay.walletconnect.com",
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   metadata: {
//     name: "React App",
//     description: "React App for WalletConnect",
//     url: "https://walletconnect.com/",
//     icons: ["https://avatars.githubusercontent.com/u/37784886"],
//   },
//   client: undefined, // optional instance of @walletconnect/sign-client
// });

// await provider.connect;


// Connect for walletConnect
const connector = new WalletConnect({
  bridge: "https://bridge.walletconnect.org", // Required

  // wss:"relay.walletconnect.com",
  qrcodeModal: QRCodeModal,
});



export const Header = () => {
  const [theme, { update }] = useTheme();
  const { width } = useWindowSize();
  const location = useLocation();
  const Navigate = useNavigate();
  const account = useRef();
  const menuList = [
    { key: "storyLine", name: "STORY" },
    { key: "howTo", name: "HOW TO" },
    { key: "mission", name: "MISSION" },
    { key: "partners", name: "PARTNERS" },
    { key: "about", name: "ABOUT" },
  ];

  
  const active = reach.minimumBalanceOf( account.current );


  const [open, setOpen] = useState(false);

  // Handle opening the wallet modal
  const handleOpen = () => {
    if (theme.walletType === null) {
      setOpen(true);
    } else if (theme.walletType === "algorand") {
      connectMyAlgoWallet();
    }
    //  else if (theme.walletType === "pera") {
    //   connectWallet();
    // }
  };

  // Handle closing the wallet modal
  const handleClose = () => setOpen(false);

  // Create a function to connect the WalletConnect
  const connectWallet = () => {
    handleClose();
    if (!connector.connected) {
      connector.createSession();
    } else {
      connector.killSession();
      window.localStorage.removeItem("leaguesaddress");
      window.localStorage.removeItem("walletType");
      theme.walletAddress = null;
      theme.walletType = null;
      update(theme);
      Navigate("/home");
    }
    // Subscribe to connection events
    connector.on("connect", (error, payload) => {
      if (error) {
        throw error;
      }

      // Get provided accounts
      const { accounts } = payload.params[0];
      window.localStorage.setItem("leaguesaddress", JSON.stringify(accounts));
      window.localStorage.setItem("walletType", "pera");
      theme.walletAddress = accounts;
      theme.walletType = "algorand";
      update(theme);
      Navigate(location.pathname);
    });

    connector.on("session_update", (error, payload) => {
      if (error) {
        throw error;
      }

      // Get updated accounts
      const { accounts } = payload.params[0];
      window.localStorage.setItem("leaguesaddress", JSON.stringify(accounts));
      window.localStorage.setItem("walletType", "pera");
      theme.walletAddress = accounts;
      theme.walletType = "pera";
      update(theme);
      Navigate(location.pathname);
    });

    connector.on("disconnect", (error, payload) => {
      if (error) {
        throw error;
      }
      window.localStorage.removeItem("leaguesaddress");
      window.localStorage.removeItem("walletType");
      theme.walletAddress = null;
      theme.walletType = null;
      update(theme);
      Navigate("/home");
    });
  };

  const connectMyAlgoWallet = async () => {
    handleClose();
    try {
      if (theme.walletAddress) {
        window.localStorage.removeItem("leaguesaddress");
        window.localStorage.removeItem("walletType");
        theme.walletAddress = null;
        theme.walletType = null;
        update(theme);
        Navigate("/home");
      } else {
        await getAccount();
        // getBalance();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAccount = async () => {
    try {
      account.current = await reach.getDefaultAccount();
      // setAccountAddress(account.current.networkAccount.addr);
      window.localStorage.setItem(
        "leaguesaddress",
        JSON.stringify(account.current.networkAccount.addr)
      );
      window.localStorage.setItem("walletType", "algorand");
      theme.walletAddress = account.current.networkAccount.addr;
      theme.walletType = "algorand";
      update(theme);
      Navigate(location.pathname);

    } catch (err) {
      console.log(err);
    }
  };
  
  // console.log("test " + theme.walletAddress);

  useEffect(() => {
    if (location.pathname === "/") {
      Navigate("/home");
    }
  }, []);

  useEffect(() => {}, [theme.walletAddress]);

  const truncate = (_str, n) => {
    let str = _str.toString();
    return str?.length > n
      ? str.substr(0, n) + "..." + str.substr(str.length - n, str.length)
      : str;
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    border: "none",
    borderRadius: "1rem",
  };

  
  // console.log("main " + theme.walletAddress);

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <NavWrapper>
            <Logo>
              <Link to="/home">
                <HeaderLogo src={theme.images.headerLogo} />
              </Link>
            </Logo>
            <BlockTimes>
              <TitleImg onClick={() => handleOpen()}>
                {theme.walletAddress === null ? (
                  <span>.. CONNECT WALLET .. </span>
                ) : (
                  <span>Address: {truncate(theme.walletAddress, 4)}</span>
                )}
                <img src={theme.images.headerTitle} alt="header-title" />
              </TitleImg>
              {/* {location.pathname === "/blockwars" && ( */}

              {/* )} */}
            </BlockTimes>

            <BlockText>
              <div>NEXT BOOST -- 07:45 pm</div>
              <div>NEXT BLOCKWARS IN -- 04:30 HRs</div>
            </BlockText>
          </NavWrapper>

          {/* {location.pathname === "/blockwars" && <BoostBtn>BOOST</BoostBtn>} */}

          {theme.walletAddress && <BoostBtn>BOOST</BoostBtn>}

          <MobileMenuWrapper>
            {theme.walletAddress === null ? (
              <MobileMenu menuList={menuList} />
            ) : (
              <MobileSideBar />
            )}
          </MobileMenuWrapper>
        </HeaderContent>
        {width > 767 &&
          (theme.walletAddress === null ? (
            <Navbar menuList={menuList} />
          ) : (
            <Balancebar accountAddress={theme.walletAddress} />
          ))}
        {width > 767 && <BackOver bgOver={theme.images.headerOver} />}
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <WalletBtn onClick={() => connectMyAlgoWallet()}>
            <img src={theme.icons.buttonPeraConnect} alt="pera-connect-logo" />
            {/* <img src={theme.images.myalgoLogo} alt="myalgo-logo" /> */}
            <span>Pera wallet</span>
          </WalletBtn>

          {/* <Divider />

          <WalletBtn onClick={() => connectWallet()}>
            <img
              src={theme.images.walletConnectLogo}
              alt="wallect-connect-logo"
            />
            <span>Pera wallet</span>
          </WalletBtn>

          <Divider /> */}

          {connector.connected 
          && 
          (
            <QRCodeModal
              connector={connector}
              onClose={() => {
                connector.killSession();
                handleClose();
              }}
            />
          )
          }
        </Box>
      </Modal>
    </HeaderWrapper>
  );
};
