import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Container, Sidebar,OutletContainer } from "./styled";
import { Sidebar as SidebarHero } from "../../components/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
export const Welcome = () => {
  const theme = useTheme();
  const { width } = useWindowSize();
  const location = useLocation()
  const Navigate = useNavigate()
  useEffect(() => {
    if(location.pathname === '/'){
      Navigate('/home')
    }
  }, [location.pathname]);
  return (
    <>
      <Container>
        {width > 1200 && theme.walletAddress && (
          <Sidebar>
            <SidebarHero />
          </Sidebar>
        )}
        <OutletContainer wallet={width > 1200 && theme.walletAddress}>
          <Outlet />
        </OutletContainer>
      </Container>
    </>
  );
};
