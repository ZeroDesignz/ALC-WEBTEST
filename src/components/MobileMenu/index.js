import React, { useState } from "react";
import { useTheme } from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MenuWrapper,
  MobileMenus,
  SidebarContent,
  LinkWrapper,
  MenuLink,
  TextInfo,
  SideBarOver,
} from "./styles";

export const MobileMenu = (props) => {
  const Navigate = useNavigate();
  const { menuList } = props;
  const theme = useTheme();
  const { width } = useWindowSize();
  const [isMenu, setIsMenu] = useState(false);
  const location = useLocation();
  const [pageName, setPageName] = useState(location.pathname);
  const [walletAddress, setWalletAddress] = useState(theme.walletAddress);

  const handleClickMenu = (index) => {
    const violation = document.getElementById(index);
    window.scrollTo({
      top: violation.offsetTop-150,
      left:0,
      behavior: "smooth",
    });
  };

  const handleMenuClick = () => {
    if (width > 1201) return;
    setIsMenu(!isMenu);
  };

  const handleClickSideMenu = (index) => {
    handleClickMenu(index);
    setIsMenu(false);
    setPageName(index);
  };

  return (
    <MenuWrapper>
      {width < 1201 && (
        <MobileMenus
          src={theme.icons.menuWhite}
          alt=""
          onClick={() => handleMenuClick()}
          aria-label="menu"
        />
      )}
      <SidebarContent
        id="sidebar_menu"
        style={{ width: isMenu && width < 1201 ? "50vw" : "0px" }}
      >
        <LinkWrapper>
          {menuList &&
            menuList.length > 0 &&
            menuList.map((menu, i) => (
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
