import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuList, SidebarContainer } from "./styled";

export const Sidebar = () => {
  const location = useLocation();
  const [pageName, setPageName] = useState(location.pathname);
  const Navigate = useNavigate();
  const createData = (key, value) => {
    return {
      key,
      value,
    };
  };
  const sidebarLinks = [
    createData("/nfts", "BIO"),
    createData("/story", "STORY"),
    createData("/blockwars", "BLOCKWARS"),
    createData("/mynft", "MY NFTS"),
    createData("/upgrade", "UPGRADE"),
  ];

  const pageNavigate = (key) => {
    setPageName(key);
    Navigate(`${key}`);
  };
  return (
    <SidebarContainer>
      {sidebarLinks.map((link) => (
        <MenuList
          key={link.key}
          active={link.key === pageName}
          onClick={() => pageNavigate(link.key)}
        >
          {link.value}
        </MenuList>
      ))}
    </SidebarContainer>
  );
};
