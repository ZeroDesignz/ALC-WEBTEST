import React, { useState } from "react";
import { useTheme } from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MenuWrapper,
  MobileMenu,
  SidebarContent,
  LinkWrapper,
  MenuLink,
  TextInfo,
  SideBarOver,
} from "./styles";

export const MobileSideBar = (props) => {
  const Navigate = useNavigate();
  const createData = (key, name) => {
    return {
      key,
      name,
    };
  };
  const sidebarLinks = [
    createData("/nfts", "BIO"),
    createData("/story", "STORY"),
    createData("/blockwars", "BLOCKWARS"),
    createData("/mynft", "MY NFTS"),
    createData("/upgrade", "UPGRADE"),
  ];
  const theme = useTheme();
  const { width } = useWindowSize();
  const [isMenu, setIsMenu] = useState(false);
  const location = useLocation();
  const [pageName, setPageName] = useState(location.pathname);
  const [walletAddress, setWalletAddress] = useState(theme.walletAddress);

  const handleClickMenu = (index) => {
    Navigate(index)
  };

  const handleMenuClick = () => {
    if (width > 1200) return;
    setIsMenu(!isMenu);
  };

  const handleClickSideMenu = (index) => {
    handleClickMenu(index);
    setIsMenu(false);
    setPageName(index);
  };

  return (
    <MenuWrapper>
      {width < 1200 && (
        <MobileMenu
          src={theme.icons.menuWhite}
          alt=""
          onClick={() => handleMenuClick()}
          aria-label="menu"
        />
      )}
      <SidebarContent
        id="sidebar_menu"
        style={{ width: isMenu && width < 1200 ? "150px" : "0px" }}
      >
        <LinkWrapper>
          {sidebarLinks &&
            sidebarLinks.length > 0 &&
            sidebarLinks.map((menu, i) => (
              <MenuLink key={i} onClick={() => handleClickSideMenu(menu.key)}>
                <TextInfo active={pageName === menu.key}>{menu?.name}</TextInfo>
              </MenuLink>
            ))}
        </LinkWrapper>
        <SideBarOver bgOver={theme.images.sidebarOver} />
      </SidebarContent>
    </MenuWrapper>
  );
};
