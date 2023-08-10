import React from "react";
import { useTheme } from "styled-components";
import {
  Container,
  StillBkg,
  ContentWrapper,
} from "./styles";

export const HomeHero = () => {
  const theme = useTheme();
  
  
  // const [pageName, setPageName] = useState("");
  // const menuList = [
  //   { key: "story", name: "STORY" },
  //   { key: "nets", name: "NFTs" },
  //   { key: "mission", name: "MISSION" },
  //   { key: "howto", name: "HOW TO" },
  //   { key: "about", name: "ABOUT" },
  // ];
  // const handleChangePage = (index) => {
  //   if (JSON.parse(window.localStorage.getItem("address")) === null) {
  //     alert("Please connect wallet");
  //     return;
  //   }
  //   if (!index) return;
  //   const el = document.getElementById("root");
  //   setPageName(index);
  //   const topPos = document.getElementById(index).offsetTop;
  //   el.scroll({
  //     top: topPos - 110,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };
  // useEffect(() => {
  //   const el = document.getElementById("root");
  //   const handleScroll = () => {
  //     menuList.forEach((menu) => {
  //       const windowTop = el.scrollTop;
  //       const topPos = document.getElementById(menu.key).offsetTop;
  //       if (Math.abs(windowTop - topPos) < 150) {
  //         setPageName(menu.key);
  //       }
  //     });
  //     if (el.scrollTop < 300) {
  //       setPageName("");
  //     }
  //   };
  //   el.addEventListener("scroll", handleScroll);
  //   return () => el.removeEventListener("scroll", handleScroll);
  // }, [menuList]);

  return (
    <Container id="homeHero">
      <StillBkg src={theme.videos.alhomeVideo} autoPlay loop muted/>
      
      {/* <MenuWrapper>
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
      </MenuWrapper> */}
      <ContentWrapper>
        <h1>Welcome <strong class="line2">to the Algo Leagues </strong></h1>
      </ContentWrapper>
    </Container>
  );
};

