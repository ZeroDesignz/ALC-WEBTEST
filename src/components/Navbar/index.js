import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "styled-components";

import { Container, MenuLink } from "./styles";

export const Navbar = (props) => {
  const Navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const { menuList } = props;
  const [pageName, setPageName] = useState(location.pathname);
  const [walletAddress, setWalletAddress] = useState(theme.walletAddress);

  const handleChangePage = (index) => {
    if (!index) return;
    setPageName(index);
    goToViolation(index);
    // Navigate(index)
  };

  const goToViolation = (id) => {
    const violation = document.getElementById(id);
    window.scrollTo({
      top: violation.offsetTop-150,
      left:0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (location.pathname === "/home") {
      setPageName("");
    }
  }, [location.pathname]);

  return (
    <Container>
      {menuList.map((menu, index) => (
        <MenuLink
          key={index}
          active={pageName === menu.key}
          onClick={() => handleChangePage(menu.key)}
          last={menuList.length === index + 1}
        >
          {menu.name}
        </MenuLink>
      ))}
    </Container>
  );
};
