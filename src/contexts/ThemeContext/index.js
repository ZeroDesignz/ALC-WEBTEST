import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createGlobalStyle,
  css,
  ThemeProvider as ThemeProviderStyled,
} from "styled-components";

/**
 * Create ThemeContext
 * Context to use theme on the app
 */
export const ThemeContext = createContext();

/**
 * Api provider to manage theme
 * @param {props} props
 */
export const ThemeProvider = ({ children, ...props }) => {
  const createASAInfo = (
    id,
    order,
    name,
    image,
    attack,
    defense,
    health,
    cardFrame,
    rarity,
    type
  ) => {
    return {
      id,
      order,
      name,
      image,
      attack,
      defense,
      health,
      cardFrame,
      rarity,
      type,
    };
  };
  const ASAInfos = [
    createASAInfo(
      511594643,
      0,
      "BIthero Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDV2dzB0d2lxNmFrcXJtN3V1ZWk4eW56aTBpeTM1a3ppaGFkMXFsYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/zaaar01KUIZHoQ8n7J/giphy.gif",
      500,
      400,
      1000,
      1900,
      100,
      "Epic"
    ),
    createASAInfo(
      495188541,
      1,
      "Etherio Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExams2b205cnRnemswdzJ2c2s0MW4zYm1oeHduMnNlMXprdzBqNDNhdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/k37A6HcZ482VCsBOCy/giphy.gif",
      300,
      200,
      600,
      1100,
      100,
      "Epic"
    ),
    createASAInfo(
      538530897,
      2,
      "Algoman Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGEyamcycjNzdmwxMGV5bW8wNTN1MzZpN2NldTR4MWNweWpkcGFobSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/NdjUVYDatLMNF5RQvf/giphy.gif",
      250,
      150,
      400,
      800,
      100,
      "Epic"
    ),
    createASAInfo(
      621613445,
      3,
      "Dr. Micalgo Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGlra3RpYXE5YndwZjgxaTExMzV1cXV2NnIzMGZidG41ZmNkY2dvaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Va01vs1W23PlyfaJxg/giphy.gif",
      100,
      1200,
      400,
      1700,
      100,
      "Epic"
    ),
    createASAInfo(
      621630874,
      4,
      "Keli Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHQ0M2FtYWFlaHFnZ2YyaWlmaXducXZrbG9iZ3N5Mm5xc3Q3cXhjaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Cg9y3TX104VOkvfSUq/giphy.gif",
      500,
      200,
      450,
      1150,
      100,
      "Epic"
    ),
    createASAInfo(
      621643797,
      5,
      "Tiny Algo Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3djczcyNno1eDh4c3VuM3IydmJ5Z3p0cW5rMjRzbTZmNXZ6dWF2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/X9YF8hsP53CCLbMcAN/giphy.gif",
      150,
      600,
      300,
      1050,
      100,
      "Epic"
    ),
    createASAInfo(
      705236458,
      6,
      "Solaines Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3Y0dnMyNXlkNWJ4ZW9teWYyZ3M1NzJuM20xcHBsZzZmdDJrdnl1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vCJUlYnDPtjyKphfPv/giphy.gif",
      275,
      125,
      300,
      700,
      100,
      "Epic"
    ),
    createASAInfo(
      704847474,
      7,
      "Akita Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmNiZzU3bDhyZ29xZnhnMm16ZXcydWIzNzE4aWEwbjdhNzUxNmJpNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/HeYSw7SYM3lw7edFo1/giphy.gif",
      100,
      50,
      150,
      300,
      100,
      "Epic"
    ),
    createASAInfo(
      705028370,
      8,
      "Eshibo Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmNiZzU3bDhyZ29xZnhnMm16ZXcydWIzNzE4aWEwbjdhNzUxNmJpNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/HeYSw7SYM3lw7edFo1/giphy.gif",
      50,
      150,
      100,
      300,
      100,
      "Epic"
    ),
    createASAInfo(
      705015006,
      9,
      "Doga Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG5tbWczZzVkNHBkMjhvd2llNGRhb2FvdmEzZDVpM3hjNW5qd2pociZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vkrilS0n4QYaGJdn3d/giphy.gif",
      150,
      100,
      50,
      300,
      100,
      "Epic"
    ),
    createASAInfo(
      732906045,
      10,
      "Algolius Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXI1eWgzMzN3N2dqeXJtczBhM2U0MXhtMG52aGE3NXplbDZzeXJueiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/NuRAQye5bJzHouwSqX/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      732912424,
      11,
      "#AOWL007 Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajlrem1maWY1NmMweWpnNjFkODk1N2pubXNlM3djeGo2cjJmM2tzNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/pFljhOGceD9zuc9dKC/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      746122668,
      12,
      "Algobot Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXFqbGk2c2N3ZjA4Z29jM3Zqcjdrd3BoNjE4ZmJuYXY4a29mZXZsMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QJVIZSEUDMZVscf7v4/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      847576688,
      13,
      "Cardana Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2F4ZDMwbzBwejFid2NtdmU3ajBwOGR3dDIwbzIyYzJ4bHNnd3I0OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2hgqBZ40NOHZkoKYxP/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      847595476,
      14,
      "Headline Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNuZzgweDMyZDdmYXhzMTVhcHRrd2M1MXY5NTRxejk0dW11NHhoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/fmYjrUnKQEfB5j74Yk/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      847589642,
      15,
      "Algogems Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTFraTJpanA0cG95MHJzNzFqMHZ1N2NxNXE2dWlyNDd0cno3OXA0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/GVq38uUt9q3w7GdbAz/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      890431334,
      16,
      "Algopard Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHIxM3N3YTgyamJqcndqY2NveTU1ZzNxOTExMzc0ZW4wYml6cDFmZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/EPuY1iVCBx2SEpFaoj/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      847615065,
      17,
      "Yieldly Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXBzZGhxdHRqOWF1b2doZXk1MnN1bjJsYWg3MGh4N3cwanVnZ2cwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/NJYhTtb68dwydau4hp/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137500404,
      18,
      "LUNA Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmRidjIxdHh0bGExdmE4bDc2cjRmZmtlYXpsdjIydWVjYjBhaWM4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UfkZnV0n6OevpdojZE/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137655426,
      19,
      "HEDERO Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW12bDZncms2ZTgydGczdWlyYjZveW1kcmowcm53ZG1neXE4czBlcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/8p7gTR3VidQPS2xSjz/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137506520,
      20,
      "PRX Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjgyc29jcnpmb3djdjRzc3J5NmE3dWQyNGhtNDlxdmJibHp5eW5vbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/z1Q9nzuGW6FKhK6dAR/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137502824,
      21,
      "POLY Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanZsMTVqcG9ndHltbXdpNHo1eWowbWRkYTJ5N2g5cjBneGg0bTdlYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/iAe2yGvJ3N2VynSGGA/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137656711,
      22,
      "USD Epic",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHE1OHhqb3c0dmw0ejRma2UxMnBwcjlxOHd6bGUzajdvYTNrd2psOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/AaCjYoVSiATpsVKEiV/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),

    createASAInfo(
      511597967,
      0,
      "Bithero Legend",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWdxZjBuZzBldW5ibzcyOGxibW1hZWdncGY0ZTRmdDRkeXBpcmJvOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MGImsTVOT7wEyQXru5/giphy.gif",
      800,
      700,
      1500,
      3000,
      200,
      "Legendary"
    ),
    createASAInfo(
      495201035,
      1,
      "Etherio Legend",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXQ1bTZ3MzBqODZ6NDlrOWF1OXB4azJybTZ3eXMxZ3ZoZHM3a3BoOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/CMR0oX2tM4mlaUr0iB/giphy.gif",
      700,
      600,
      1100,
      2400,
      200,
      "Legendary"
    ),
    createASAInfo(
      538552313,
      2,
      "Algoman Legend",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmE0eWdyZHhjZHFvY2M1MzQwbzR4Ym5pMXhtdWVvN3JoYXQwb2xtbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/glQ6LFSUmPFJGg7QGy/giphy.gif",
      500,
      400,
      700,
      1600,
      200,
      "Legendary"
    ),
    createASAInfo(
      621621874,
      3,
      "Dr. Micalgo Legend",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW93c3gyaDFycmJqeWdwdml6dHRzczdkOW9jbG0wdTd3NmY4bmN5dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wlCBcveUQssyc3s2D3/giphy.gif",
      150,
      1400,
      450,
      2000,
      200,
      "Legendary"
    ),
    createASAInfo(
      621634753,
      4,
      "Keli Legend",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXJkYzhsd2VtczY2OG81bjA0bDR3azRjYTVnYW5qNWJzbHA3bG5pcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/B9XbyVcKCVYKiPsMet/giphy.gif",
      800,
      400,
      700,
      1900,
      200,
      "Legendary"
    ),
    createASAInfo(
      621645870,
      5,
      "Tiny Algo Legend",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejFic3QzZ3phejMzdzZ5cTZ4cGs2MTY1bmk0cmw3bHBiMGRpemF5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Ho7GLXpfaJdRV81oqE/giphy.gif",
      350,
      700,
      600,
      1650,
      200,
      "Legendary"
    ),
    createASAInfo(
      705236729,
      6,
      "Solaines Legend",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTJqbWduZWUzZndjYXcwd3c5MmJkMmpqNTUyNTJ5NjI5aGlpdGdoNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/akS9yoQQa9usj9Gk3B/giphy.gif",
      525,
      375,
      550,
      1450,
      200,
      "Legendary"
    ),
    createASAInfo(
      704843200,
      7,
      "Akita Legend",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGlxM29tOTJxcWt0ZjVyMG1uaDNwcTlhN2dnMGowYm40d205em1odyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/0s7WjmJP2w7gQac1wm/giphy.gif",
      150,
      75,
      225,
      450,
      200,
      "Legendary"
    ),
    createASAInfo(
      705032493,
      8,
      "Eshibo Legend",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXk1b3R0MHlqMW5lem84bjg2anFzbjVtYzhybXAwZGMxaHByNXFqbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/REFUjul3dLYV7HNBKL/giphy.gif",
      75,
      225,
      150,
      450,
      200,
      "Legendary"
    ),
    createASAInfo(
      705017350,
      9,
      "Doga Legend",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWE5YTJrbnRjYnZoM3VmNmtmNGFpbDlqaDN0eHRpNThhcGtjNmY4YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/mSL5pQMDO506DVcjRK/giphy.gif",
      225,
      150,
      75,
      450,
      200,
      "Legendary"
    ),
    createASAInfo(
      732906974,
      10,
      "Algolius Legendary",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXI1eWgzMzN3N2dqeXJtczBhM2U0MXhtMG52aGE3NXplbDZzeXJueiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/NuRAQye5bJzHouwSqX/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      732913198,
      12,
      "#AOWL007 Legendary",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajlrem1maWY1NmMweWpnNjFkODk1N2pubXNlM3djeGo2cjJmM2tzNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/pFljhOGceD9zuc9dKC/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      746124215,
      13,
      "Algobot Legendary",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXFqbGk2c2N3ZjA4Z29jM3Zqcjdrd3BoNjE4ZmJuYXY4a29mZXZsMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QJVIZSEUDMZVscf7v4/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      847578488,
      14,
      "Cardana Legendary",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2F4ZDMwbzBwejFid2NtdmU3ajBwOGR3dDIwbzIyYzJ4bHNnd3I0OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2hgqBZ40NOHZkoKYxP/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      847596677,
      15,
      "Headline Legendary",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNuZzgweDMyZDdmYXhzMTVhcHRrd2M1MXY5NTRxejk0dW11NHhoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/fmYjrUnKQEfB5j74Yk/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      847590522,
      16,
      "Algogems Legendary",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTFraTJpanA0cG95MHJzNzFqMHZ1N2NxNXE2dWlyNDd0cno3OXA0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/GVq38uUt9q3w7GdbAz/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      890432522,
      17,
      "Algopard Legendary",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHIxM3N3YTgyamJqcndqY2NveTU1ZzNxOTExMzc0ZW4wYml6cDFmZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/EPuY1iVCBx2SEpFaoj/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      847615878,
      18,
      "Yieldly Legendary",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXBzZGhxdHRqOWF1b2doZXk1MnN1bjJsYWg3MGh4N3cwanVnZ2cwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/NJYhTtb68dwydau4hp/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137501636,
      19,
      "LUNA Legendary",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmRidjIxdHh0bGExdmE4bDc2cjRmZmtlYXpsdjIydWVjYjBhaWM4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UfkZnV0n6OevpdojZE/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137655749,
      20,
      "HEDERO Legendary",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW12bDZncms2ZTgydGczdWlyYjZveW1kcmowcm53ZG1neXE4czBlcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/8p7gTR3VidQPS2xSjz/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137507251,
      21,
      "PRX Legendary",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjgyc29jcnpmb3djdjRzc3J5NmE3dWQyNGhtNDlxdmJibHp5eW5vbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/z1Q9nzuGW6FKhK6dAR/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137503226,
      22,
      "POLY Legendary",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanZsMTVqcG9ndHltbXdpNHo1eWowbWRkYTJ5N2g5cjBneGg0bTdlYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/iAe2yGvJ3N2VynSGGA/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137657622,
      23,
      "USD Legendary",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHE1OHhqb3c0dmw0ejRma2UxMnBwcjlxOHd6bGUzajdvYTNrd2psOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/AaCjYoVSiATpsVKEiV/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      711647870,
      11,
      "Cerberus Legend",
      "https://i.giphy.com/media/RBCLeMdEC7aozkWlMn/giphy.webp",
      750,
      600,
      1250,
      2600,
      200,
      "Legendary"
    ),

    createASAInfo(
      581461968,
      0,
      "Bithero Neapolitan",
      "https://i.giphy.com/media/eEFM0alLp78nPqAvBq/giphy.webp",
      1600,
      1400,
      3000,
      6000,
      350,
      "Neapolitan"
    ),
    createASAInfo(
      581479153,
      1,
      "Etherio Neapolitan",
      "https://i.giphy.com/media/zjwgtpvwHMoMH8kLDL/giphy.webp",
      1400,
      1200,
      2200,
      4800,
      350,
      "Neapolitan"
    ),
    createASAInfo(
      581489188,
      2,
      "Algoman Neapolitan",
      "https://i.giphy.com/media/aoed2zMxrt5c8M5wvz/giphy.webp",
      1000,
      800,
      1400,
      3200,
      350,
      "Neapolitan"
    ),
    createASAInfo(
      663825237,
      3,
      "Dr. Micalgo Neapolitan",
      "https://i.giphy.com/media/FDonlTSNrpa6y0ZtMS/giphy.webp",
      500,
      1800,
      1000,
      3300,
      350,
      "Neapolitan"
    ),
    createASAInfo(
      663649566,
      4,
      "Keli Neapolitan",
      "https://i.giphy.com/media/igrIvM7KnYLwxPvHkx/giphy.webp",
      1000,
      800,
      1400,
      3200,
      350,
      "Neapolitan"
    ),
    createASAInfo(
      663821923,
      5,
      "Tiny Algo Neapolitan",
      "https://i.giphy.com/media/nbcygu35gUde9gIizP/giphy.webp",
      700,
      800,
      1200,
      2700,
      350,
      "Neapolitan"
    ),
    createASAInfo(
      708914598,
      6,
      "Solaines Neapolitan",
      "https://i.giphy.com/media/Fd8RweCApCGNqHF4y1/giphy.webp",
      1050,
      750,
      1100,
      2900,
      350,
      "Neapolitan"
    ),
    createASAInfo(
      708909710,
      7,
      "Akita Neapolitan",
      "https://i.giphy.com/media/JvZzgJN2z05jcDtkmG/giphy.webp",
      300,
      150,
      450,
      900,
      350,
      "Neapolitan"
    ),
    createASAInfo(
      708912976,
      8,
      "Eshibo Neapolitan",
      "https://i.giphy.com/media/Fljd4r6iruHxdnhXuZ/giphy.webp",
      150,
      450,
      300,
      900,
      350,
      "Neapolitan"
    ),
    createASAInfo(
      708911518,
      9,
      "Doga Neapolitan",
      "https://i.giphy.com/media/AQTBk76pF6zYHDTlLo/giphy.webp",
      450,
      300,
      150,
      900,
      350,
      "Neapolitan"
    ),
    createASAInfo(
      748083944,
      10,
      "#Algolius Neapolitan",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajlrem1maWY1NmMweWpnNjFkODk1N2pubXNlM3djeGo2cjJmM2tzNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/pFljhOGceD9zuc9dKC/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),

    createASAInfo(
      748089568,
      11,
      "#AOWL007 Neapolitan",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajlrem1maWY1NmMweWpnNjFkODk1N2pubXNlM3djeGo2cjJmM2tzNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/pFljhOGceD9zuc9dKC/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      748095279,
      12,
      "Algobot Neapolitan",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXFqbGk2c2N3ZjA4Z29jM3Zqcjdrd3BoNjE4ZmJuYXY4a29mZXZsMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QJVIZSEUDMZVscf7v4/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      847652005,
      13,
      "Cardana Neapolitan",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2F4ZDMwbzBwejFid2NtdmU3ajBwOGR3dDIwbzIyYzJ4bHNnd3I0OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2hgqBZ40NOHZkoKYxP/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      847648674,
      14,
      "Headline Neapolitan",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNuZzgweDMyZDdmYXhzMTVhcHRrd2M1MXY5NTRxejk0dW11NHhoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/fmYjrUnKQEfB5j74Yk/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      847649602,
      15,
      "Algogems Neapolitan",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTFraTJpanA0cG95MHJzNzFqMHZ1N2NxNXE2dWlyNDd0cno3OXA0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/GVq38uUt9q3w7GdbAz/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      890433186,
      16,
      "Algopard Neapolitan",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHIxM3N3YTgyamJqcndqY2NveTU1ZzNxOTExMzc0ZW4wYml6cDFmZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/EPuY1iVCBx2SEpFaoj/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      847644979,
      17,
      "Yieldly Neapolitan",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXBzZGhxdHRqOWF1b2doZXk1MnN1bjJsYWg3MGh4N3cwanVnZ2cwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/NJYhTtb68dwydau4hp/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137501885,
      18,
      "LUNA Neapolitan",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmRidjIxdHh0bGExdmE4bDc2cjRmZmtlYXpsdjIydWVjYjBhaWM4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UfkZnV0n6OevpdojZE/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137655909,
      19,
      "HEDERO Neapolitan",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW12bDZncms2ZTgydGczdWlyYjZveW1kcmowcm53ZG1neXE4czBlcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/8p7gTR3VidQPS2xSjz/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137507807,
      20,
      "PRX Neapolitan",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjgyc29jcnpmb3djdjRzc3J5NmE3dWQyNGhtNDlxdmJibHp5eW5vbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/z1Q9nzuGW6FKhK6dAR/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137504127,
      21,
      "POLY Neapolitan",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanZsMTVqcG9ndHltbXdpNHo1eWowbWRkYTJ5N2g5cjBneGg0bTdlYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/iAe2yGvJ3N2VynSGGA/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137657244,
      22,
      "USD Neapolitan",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHE1OHhqb3c0dmw0ejRma2UxMnBwcjlxOHd6bGUzajdvYTNrd2psOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/AaCjYoVSiATpsVKEiV/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),

    createASAInfo(
      511591952,
      0,
      "Bithero Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3I0dGtsdHdqbmxzajUyczA2MW51bHRyc3F1aHRhcDd3aW9jbHlqeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/tp7Hnu27lHxhjcVwui/giphy.gif",
      300,
      200,
      800,
      1300,
      50,
      "Rare"
    ),
    createASAInfo(
      495124139,
      1,
      "Etherio Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTBjYmxrMTZsN3VmMmhxeW1haG13NGlieWJ4Nm5zM3g4ZzloNGNiMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VWxqlzOLE8VlmvePHL/giphy.gif",
      200,
      100,
      400,
      700,
      50,
      "Rare"
    ),
    createASAInfo(
      538526672,
      2,
      "Algoman Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXY0YTc4OTEwMHhuaTk2emZ2NHRmN2VkZXlpYXc2a2l3dzF4c3FlNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/62VUDiHSjUCkcZzjpL/giphy.gif",
      150,
      50,
      300,
      500,
      50,
      "Rare"
    ),
    createASAInfo(
      621605521,
      3,
      "Dr. Micalgo Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcndzY3Zud3VuNGN5azZvcjR6dmV0NWltNGN0ZDcyZHd4Y3c3b3E2ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/sDK1kM5N5t5chfsY6k/giphy.gif",
      50,
      1000,
      350,
      1400,
      50,
      "Rare"
    ),
    createASAInfo(
      621625401,
      4,
      "Keli Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamEwMmNjNjIyZ3JiMjJnN3Rqb3M5OTk5OWNhbDZsbm5ud3hlamQzMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/yWuRp14deeNNcagKWS/giphy.gif",
      400,
      100,
      400,
      900,
      50,
      "Rare"
    ),
    createASAInfo(
      621640045,
      5,
      "Tiny Algo Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Q3ejQxYWU4bndnMGN1cGxscXc1ZjY5YzJhMHkwMG93ZGJhcHRzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/McBYM8gnM15ohk6xal/giphy.gif",
      75,
      500,
      200,
      775,
      50,
      "Rare"
    ),
    createASAInfo(
      705235054,
      6,
      "Solaines Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm53cjEyeDZtNXk3dTNsdmRsa2d3dTRkajNrYzE3cGxkcjFuMWg0aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JXZjrtCUBIE83Q9GwE/giphy.gif",
      175,
      25,
      200,
      400,
      50,
      "Rare"
    ),
    createASAInfo(
      705308800,
      7,
      "Akita Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDF3eXRvdmNnNWVzNTFzdWVjNXJrdmxubDEydjFrdDM3ajcwMGhxcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/pIbLsSpreW1aM0LVXF/giphy.gif",
      50,
      25,
      75,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      705025795,
      8,
      "Eshibo Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmlhMmNodm1pYjdnOGh2dnRmaW9xNjBheDBseGc5ZnZvOW9oNW85NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QoEX3mIBwSCWjqxQqP/giphy.gif",
      25,
      75,
      50,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      705014456,
      9,
      "Doga Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHQwdnFocnZnbXF6MTJmNmM4NHkzdzM3MHM3bGJiY3Bua25xZGM4aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XVNsEUrrny0zVu2rnG/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      732905408,
      10,
      "Algolius Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXI1eWgzMzN3N2dqeXJtczBhM2U0MXhtMG52aGE3NXplbDZzeXJueiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/NuRAQye5bJzHouwSqX/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      732909451,
      11,
      "#AOWL007",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajlrem1maWY1NmMweWpnNjFkODk1N2pubXNlM3djeGo2cjJmM2tzNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/pFljhOGceD9zuc9dKC/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      746120934,
      12,
      "Algobot Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXFqbGk2c2N3ZjA4Z29jM3Zqcjdrd3BoNjE4ZmJuYXY4a29mZXZsMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QJVIZSEUDMZVscf7v4/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      847575317,
      13,
      "Cardana Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2F4ZDMwbzBwejFid2NtdmU3ajBwOGR3dDIwbzIyYzJ4bHNnd3I0OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2hgqBZ40NOHZkoKYxP/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      847594689,
      14,
      "Headline Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNuZzgweDMyZDdmYXhzMTVhcHRrd2M1MXY5NTRxejk0dW11NHhoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/fmYjrUnKQEfB5j74Yk/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      847587465,
      15,
      "Algogems Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTFraTJpanA0cG95MHJzNzFqMHZ1N2NxNXE2dWlyNDd0cno3OXA0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/GVq38uUt9q3w7GdbAz/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      890430569,
      16,
      "Algopard Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHIxM3N3YTgyamJqcndqY2NveTU1ZzNxOTExMzc0ZW4wYml6cDFmZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/EPuY1iVCBx2SEpFaoj/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      847606772,
      17,
      "Yieldly Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXBzZGhxdHRqOWF1b2doZXk1MnN1bjJsYWg3MGh4N3cwanVnZ2cwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/NJYhTtb68dwydau4hp/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137496539,
      18,
      "LUNA Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmRidjIxdHh0bGExdmE4bDc2cjRmZmtlYXpsdjIydWVjYjBhaWM4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UfkZnV0n6OevpdojZE/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137655192,
      19,
      "HEDERO Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW12bDZncms2ZTgydGczdWlyYjZveW1kcmowcm53ZG1neXE4czBlcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/8p7gTR3VidQPS2xSjz/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137506293,
      20,
      "PRX Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjgyc29jcnpmb3djdjRzc3J5NmE3dWQyNGhtNDlxdmJibHp5eW5vbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/z1Q9nzuGW6FKhK6dAR/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137502464,
      21,
      "POLY Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanZsMTVqcG9ndHltbXdpNHo1eWowbWRkYTJ5N2g5cjBneGg0bTdlYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/iAe2yGvJ3N2VynSGGA/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
    createASAInfo(
      1137656358,
      22,
      "USD Rare",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHE1OHhqb3c0dmw0ejRma2UxMnBwcjlxOHd6bGUzajdvYTNrd2psOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/AaCjYoVSiATpsVKEiV/giphy.gif",
      75,
      50,
      25,
      150,
      50,
      "Rare"
    ),
  ];

  const oriItems = [
    {
      image: "images/NFT/Ori1.png",
      name: "BIthero",
      class: "Villain",
      lastSeen: "He exists everywhere…",
      power: "Unknown",
      weapons: "Royal Battle AXE",
      weakness: "-",
      blockchain: "Bitcoin",
      history: "Bithero is the architect of all that came after; known as “the great ancient” or “fallen angel” by other blockgangs throughout the metaverse. Bithero was the first crypto hero created by Satoshio Nakamalgo, in hopes of making the world a better place. At first, he did. He gained legions of fans and introduced the people to the blockworld. Millions of people quickly became acquainted with their superior technology and intelligence. However, corruption grew along with his power, and soon Bithero became a giant. So large and menacing that he no longer had need to fight with small one-timers to gain control. But - even the greatest heroes have no choice but to be grateful and acknowledge the real good that Bithero did in his glory days. If it wasn’t for him, Algoman and his allies wouldn't be able to keep growing in power.",
    },
    {
      image: "images/NFT/Ori2.png",
      name: "Etherio",
      class: "Villain",
      lastSeen: "The Ether Gang’s Gas Palace",
      power: "In battle he is enormous; can release toxic flammable gas",
      weapons: "GAS",
      weakness: "-",
      blockchain: "Etherium",
      history: "If Bithero is the grandfather of the Blockwars, Etherio is the current superstar. Etherio rose from being another generic blockgang leader, to becoming the principal warlord of the algoverse. His reach expands through every corner of the greater metaverse and he has legions of followers in the physical realm too. Etherio is as much a scientist, as he is a cunning warrior, and for all his might on the battlefield, the real danger he brings to the algoverse happens behind closed doors. The closest he has ever been to being defeated was when a young hero named Algoman besieged his great palace…",
    },
    {
      image: "images/NFT/Ori3.png",
      name: "Algoman",
      class: "Hero",
      lastSeen: "Warping into The Ether Gang’s Palace",
      power: "Can warp through time and space",
      weapons: "Dagger",
      weakness: "-",
      blockchain: "Algorand",
      history:
        "Minted by Dr. Micalgo, with the help of Sofia, is the culmination of years of scientific research and discovery. Algoman is a very young soul, and his celestial blue and bronze suit is equipped with a sword of light, flickering with electricity. It gives him an imposing look, but his powers are not fully developed yet. Dr. Micalgo hopes that with enough time and support, the power and faith of the people he is trying to save will fuel Algoman’s powers, and he will surge to meet the rising threats. As one of the founders of the Algoleagues, Algoman created and was the first to pledge and live by the organization’s creed: “I hereby swear that until my last dying breath, I will fight for the good of all beings, and for the end of the blockchain trilemma.” - Algoman, Son Of Dr. Micalgo",
    },
    {
      image: "images/NFT/Ori4.png",
      name: "Dr. Micalgo",
      class: "Hero",
      lastSeen: "Developing catalysts and other technologies in his lab at NIT",
      power: "High Level Intelligence, Creator of the Block Game Technology, Supreme Coder, Best Dad Ever",
      weapons: "Catalysts",
      weakness: "-",
      blockchain: "Algorand",
      history: "‘The Brains,’ ‘The Don,’ ‘The Godfather’ of the block game, the man that started it all, Dr. Micalgo. Brilliant, is an understatement; his awards include a Godel and Nobel Prize for his work in Computer Science. However, his greatest accomplishment is being a father to his son Al. Dr. Micalgo is a genius, but he knows it takes a team of dedicated people to create change. He took a hard look at the world and all the corruption and pollution being caused by Bithero and Etherio’s respective blockchains and decided he was gonna change it. He recruited a core team of Sofi and Keli to build his lab from the ground up. With their help, he pioneered coding and technology to promote what other blockchains had failed to execute properly: scalability, security, and decentralization. This would become the technological foundation used to create The Upgrade Chamber and Catalysts. Without this coding our first hero, Algoman, would not have been minted. Now, Dr. Micalgo works with heroes from The Algo Leagues in efforts to solve the Block Verse Trilemma once and for all.",
    },
    {
      image: "images/NFT/Ori5.png",
      name: "Keli",
      class: "Hero",
      lastSeen: "Sparing with Algoman",
      power: "Singing beautiful music that can immobilize",
      weapons: "Siren",
      weakness: "-",
      blockchain: "Algorand",
      history: "The Algo Leagues beautiful siren, Keli, can usually be found near Algoman or Dr. Micalgo. Algoman despises this quality of hers, because she is the only core team member that can stop Algoman from teleporting with her beautiful music. Keli is a tough cookie. She is always the first on the scene to brief our heroes, develop an attack (or rescue) strategy in the Earthly plane, or to be the only one to stand up to Algoman if he is being stubborn. Without her ability to recruit and strategize, The Algo Leagues wouldn’t be the organized group they are today.",
    },
    {
      image: "images/NFT/Ori6.png",
      name: "Tiny Algo",
      class: "Hero",
      lastSeen: "Shrinking Himself To Fit Into His Even Tinier Vehicle",
      power: "Ability to shrink to the size of a pea, or expand to the size Bithero",
      weapons: "Increases and Decrease",
      weakness: "-",
      blockchain: "Algorand",
      history: "Don’t let his tiny size fool you, everyone on the Algo blockchain knows about this guy, he’s a big deal. Tiny is green because he’s all about the coins, and providing a secure and decentralized way to trade and access them. Though he is a fairly new hero, joined in 2020, he is loved by the entire team. The phrase, ‘I’m a lover, not a fighter,’ was made for Tiny. He does all he can to build and maintain a positive community on the Algo block game. But sometimes, his friendly, loveable nature, makes some think he is an easy target to exploit. That’s when Tiny expands to protect and all can see how large he truly is…and sometimes he may throw a punch or two if he is provoked enough - let's just say he packs a punch.",
    },
    {
      image: "images/NFT/Ori7.png",
      name: "Solaines",
      class: "Villain",
      lastSeen: "Down for 24 hours",
      power: "Speed, Phantom Ability, Powerful Hair Whip",
      weapons: "Staff",
      weakness: "-",
      blockchain: "Solana",
      history: "Maybe…'frenemy,’ would be the best way to capture the relationship between our heroes and Solaines. They are in their own lane, a known denouncer of Etherio, his NAGMI crew, and high gas utilization. The Alpha is that though they are rumored to be ‘centralized,’ they are super fast…maybe even faster than Al? The future holds the answer. What we do know is that beyond their beautiful and strong appearance, lies a personality lacking patience, and because of this attitude of theirs, they were “gently” put down for 24 hours.",
    },
    {
      image: "images/NFT/Ori8.png",
      name: "Akita",
      class: "Hero",
      lastSeen: "At Tracy’s side",
      power: "Center Head of Cerberus, More to Discover…",
      weapons: "None",
      weakness: "-",
      blockchain: "Algorand",
      history: "This is THE dog, known and loved by all of the Algoverse; Akita can easily be spotted by her Decentralization necklace. She’s loving and protective of our heroes, and although this adorable pup is technically Tracy’s dog, Akita always seems to find her way to Al and other heroes. Dr. Micalgo is trying to figure out what other abilities Akita has, and what happens if she interacts with catalysts beyond Decentralization…",
    },
    {
      image: "images/NFT/Ori9.png",
      name: "Eshibo",
      class: "Villain",
      lastSeen: "Guarding Etherios Gas Palace",
      power: "Unknown",
      weapons: "None",
      weakness: "-",
      blockchain: "Etherium",
      history: "Eshibo is Etherio’s loyal pup. When he isn’t guarding Etherio and his crew of NAGMIs, he has been spotted (frequently) picking fights with Dogabreeds. He despises those dogs and has a strong dislike for Akita. The feeling is mutual between the two. It is believed that Eshibo, Akita, and other dogabreed dogs may have common ancestry.",
    },
    {
      image: "images/NFT/Ori10.png",
      name: "Doga",
      class: "None",
      lastSeen: "Randomly Walking the Streets",
      power: "Unknown",
      weapons: "None",
      weakness: "-",
      blockchain: "Doge",
      history: "Dogabreeds are any stray dogs that are small, with orangey fur, and pointy ears. At first, everyone laughed when they began to see them running around; however, somehow they have become an insanely expensive dog to own. No one knows why, maybe it’s because they’re so adorable. It is believed that these dogs share an ancestor with Akita and Eshibo.",
    },
  ];

  const legendItems = [
    {
      id: 511597967,
      name: "BIthero",
      image: "https://i.giphy.com/media/y7lpgPllQhpYcugyKK/giphy.webp",
      attack: 800,
      defense: 700,
      health: 1500,
      cardFrame: 3000,
      rarity: 200,
    },
    {
      id: 495201035,
      name: "Etherio",
      image: "https://i.giphy.com/media/oD8MyGjFk2VNoqltXF/giphy.webp",
      attack: 700,
      defense: 600,
      health: 1100,
      cardFrame: 2400,
      rarity: 200,
    },
    {
      id: 538552313,
      name: "Algoman",
      image: "https://i.giphy.com/media/uQ6EPECpitnJGUe6wb/giphy.webp",
      attack: 500,
      defense: 400,
      health: 700,
      cardFrame: 1600,
      rarity: 200,
    },
    {
      id: 621621874,
      name: "Dr. Micalgo",
      image: "https://i.giphy.com/media/lDsDuxjNwPTvnqVHRU/giphy.webp",
      attack: 150,
      defense: 1400,
      health: 450,
      cardFrame: 2000,
      rarity: 200,
    },
    {
      id: 621634753,
      name: "Keli",
      image: "https://i.giphy.com/media/i5x7gSlXKH0OFw7mPc/giphy.webp",
      attack: 800,
      defense: 400,
      health: 700,
      cardFrame: 1900,
      rarity: 200,
    },
    {
      id: 621645870,
      name: "Tiny Algo",
      image: "https://i.giphy.com/media/DFRXXsuSsJK4UcOrki/giphy.webp",
      attack: 350,
      defense: 700,
      health: 600,
      cardFrame: 1650,
      rarity: 200,
    },
    {
      id: 705236729,
      name: "Solaines",
      image: "https://i.giphy.com/media/bxm424i0nQ3RYG4Ph6/giphy.webp",
      attack: 525,
      defense: 375,
      health: 550,
      cardFrame: 1450,
      rarity: 200,
    },
    {
      id: 704843200,
      name: "Akita",
      image: "https://i.giphy.com/media/QVdI3V4toJDanyiWOE/giphy.webp",
      attack: 150,
      defense: 75,
      health: 225,
      cardFrame: 450,
      rarity: 200,
    },
    {
      id: 705032493,
      name: "Eshibo",
      image: "https://i.giphy.com/media/gIcM7rhSCtpFoCsAsN/giphy.webp",
      attack: 75,
      defense: 225,
      health: 150,
      cardFrame: 450,
      rarity: 200,
    },
    {
      id: 705017350,
      name: "Doga",
      image: "https://i.giphy.com/media/h47k7j6GFKkLLKmEo5/giphy.webp",
      attack: 225,
      defense: 150,
      health: 75,
      cardFrame: 450,
      rarity: 200,
    },
  ];

  const neapItems = [
    {
      id: 581461968,
      name: "Bithero",
      image: "https://i.giphy.com/media/eEFM0alLp78nPqAvBq/giphy.webp",
      attack: 1600,
      defense: 1400,
      health: 3000,
      cardFrame: 6000,
      rarity: 350,
    },
    {
      id: 581479153,
      name: "Etherio",
      image: "https://i.giphy.com/media/zjwgtpvwHMoMH8kLDL/giphy.webp",
      attack: 1400,
      defense: 1200,
      health: 2200,
      cardFrame: 4800,
      rarity: 350,
    },
    {
      id: 581489188,
      name: "Algoman",
      image: "https://i.giphy.com/media/aoed2zMxrt5c8M5wvz/giphy.webp",
      attack: 1000,
      defense: 800,
      health: 1400,
      cardFrame: 3200,
      rarity: 350,
    },
    {
      id: 663825237,
      name: "Dr. Micalgo",
      image: "https://i.giphy.com/media/FDonlTSNrpa6y0ZtMS/giphy.webp",
      attack: 500,
      defense: 1800,
      health: 1000,
      cardFrame: 3300,
      rarity: 350,
    },
    {
      id: 663649566,
      name: "Keli",
      image: "https://i.giphy.com/media/igrIvM7KnYLwxPvHkx/giphy.webp",
      attack: 1000,
      defense: 800,
      health: 1400,
      cardFrame: 3200,
      rarity: 350,
    },
    {
      id: 663821923,
      name: "Tiny Algo",
      image: "https://i.giphy.com/media/nbcygu35gUde9gIizP/giphy.webp",
      attack: 700,
      defense: 800,
      health: 1200,
      cardFrame: 2700,
      rarity: 350,
    },
    {
      id: 708914598,
      name: "Solaines",
      image: "https://i.giphy.com/media/Fd8RweCApCGNqHF4y1/giphy.webp",
      attack: 1050,
      defense: 750,
      health: 1100,
      cardFrame: 2900,
      rarity: 350,
    },
    {
      id: 708909710,
      name: "Akita",
      image: "https://i.giphy.com/media/JvZzgJN2z05jcDtkmG/giphy.webp",
      attack: 300,
      defense: 150,
      health: 450,
      cardFrame: 900,
      rarity: 350,
    },
    {
      id: 708912976,
      name: "Eshibo",
      image: "https://i.giphy.com/media/Fljd4r6iruHxdnhXuZ/giphy.webp",
      attack: 150,
      defense: 450,
      health: 300,
      cardFrame: 900,
      rarity: 350,
    },
    {
      id: 708911518,
      name: "Doga",
      image: "https://i.giphy.com/media/AQTBk76pF6zYHDTlLo/giphy.webp",
      attack: 450,
      defense: 300,
      health: 150,
      cardFrame: 900,
      rarity: 350,
    },
  ];

  const epicItems = [
    {
      id: 511594643,
      name: "BIthero",
      image: "https://i.giphy.com/media/XRUXK6fgXJ5Z5RFOJd/giphy.webp",
      attack: 500,
      defense: 400,
      health: 1000,
      cardFrame: 1900,
      rarity: 100,
    },
    {
      id: 495188541,
      name: "Etherio",
      image: "https://i.giphy.com/media/eEGRswR8KYqreo9R7a/giphy.webp",
      attack: 300,
      defense: 200,
      health: 600,
      cardFrame: 1100,
      rarity: 100,
    },
    {
      id: 538530897,
      name: "Algoman",
      image: "https://i.giphy.com/media/nBZHeNL0GzQSlhlIxn/giphy.webp",
      attack: 250,
      defense: 150,
      health: 400,
      cardFrame: 800,
      rarity: 100,
    },
    {
      id: 621613445,
      name: "Dr. Micalgo",
      image: "https://i.giphy.com/media/kzwxLnIDZ6IwnuiqhB/giphy.webp",
      attack: 100,
      defense: 1200,
      health: 400,
      cardFrame: 1700,
      rarity: 100,
    },
    {
      id: 621630874,
      name: "Keli",
      image: "https://i.giphy.com/media/2vxmqZrBj3xESq28jE/giphy.webp",
      attack: 500,
      defense: 200,
      health: 450,
      cardFrame: 1150,
      rarity: 100,
    },
    {
      id: 621643797,
      name: "Tiny Algo",
      image: "https://i.giphy.com/media/GR81Zg4H9j0ByK2VYi/giphy.webp",
      attack: 150,
      defense: 600,
      health: 300,
      cardFrame: 1050,
      rarity: 100,
    },
    {
      id: 705236458,
      name: "Solaines",
      image: "https://i.giphy.com/media/LZgRn4MxNegC5Ybgll/giphy.webp",
      attack: 275,
      defense: 125,
      health: 300,
      cardFrame: 700,
      rarity: 100,
    },
    {
      id: 704847474,
      name: "Akita",
      image: "https://i.giphy.com/media/LSN7yjZWS58n95EUsN/giphy.webp",
      attack: 100,
      defense: 50,
      health: 150,
      cardFrame: 300,
      rarity: 100,
    },
    {
      id: 705028370,
      name: "Eshibo",
      image: "https://i.giphy.com/media/BBJecy65FAJjbIxsBo/giphy.webp",
      attack: 50,
      defense: 150,
      health: 100,
      cardFrame: 300,
      rarity: 100,
    },
    {
      id: 705015006,
      name: "Doga",
      image: "https://i.giphy.com/media/DGeY9uyXMdeegEayfm/giphy.webp",
      attack: 150,
      defense: 100,
      health: 50,
      cardFrame: 300,
      rarity: 100,
    },
  ];

  const rareItems = [
    {
      id: 511591952,
      name: "BIthero",
      image: "https://i.giphy.com/media/EeE7FKpqudpL52WAAh/giphy.webp",
      attack: 300,
      defense: 200,
      health: 800,
      cardFrame: 1300,
      rarity: 50,
    },
    {
      id: 495124139,
      name: "Etherio",
      image: "https://i.giphy.com/media/FxpkgGh8v2jQ0ZZ5t8/giphy.webp",
      attack: 200,
      defense: 100,
      health: 400,
      cardFrame: 700,
      rarity: 50,
    },
    {
      id: 538526672,
      name: "Algoman",
      image: "https://i.giphy.com/media/rBvQMJIL2Qhi24li0C/giphy.webp",
      attack: 150,
      defense: 50,
      health: 300,
      cardFrame: 500,
      rarity: 50,
    },
    {
      id: 621605521,
      name: "Dr. Micalgo",
      image: "https://i.giphy.com/media/SD2KMOPIz6uc5ZtMIU/giphy.webp",
      attack: 50,
      defense: 1000,
      health: 350,
      cardFrame: 1400,
      rarity: 50,
    },
    {
      id: 621625401,
      name: "Keli",
      image: "https://i.giphy.com/media/fdYWKegYv3u8y7ftbW/giphy.webp",
      attack: 400,
      defense: 100,
      health: 400,
      cardFrame: 900,
      rarity: 50,
    },
    {
      id: 621640045,
      name: "Tiny Algo",
      image: "https://i.giphy.com/media/SkXDMKwEJFLAzoQYrY/giphy.webp",
      attack: 75,
      defense: 500,
      health: 200,
      cardFrame: 775,
      rarity: 50,
    },
    {
      id: 705235054,
      name: "Solaines",
      image: "https://i.giphy.com/media/ETevpeqP7DJaYbH2bj/giphy.webp",
      attack: 175,
      defense: 25,
      health: 200,
      cardFrame: 400,
      rarity: 50,
    },
    {
      id: 705308800,
      name: "Akita",
      image: "https://i.giphy.com/media/QwgWNEoitHADyzmx9b/giphy.webp",
      attack: 50,
      defense: 25,
      health: 75,
      cardFrame: 150,
      rarity: 50,
    },
    {
      id: 705025795,
      name: "Eshibo",
      image: "https://i.giphy.com/media/JvFwQgNuJGWzHkHUCC/giphy.webp",
      attack: 25,
      defense: 75,
      health: 50,
      cardFrame: 150,
      rarity: 50,
    },
    {
      id: 705014456,
      name: "Doga",
      image: "https://i.giphy.com/media/mWUpzA2EFDMrShfIla/giphy.webp",
      attack: 75,
      defense: 50,
      health: 25,
      cardFrame: 150,
      rarity: 50,
    },
    
    {
      id: 449114512,
      name: "USD",
      image: "https://ipfs.algonode.xyz/ipfs/bafybeiarj45qpckicbfurdplf3zsut26nt327fr5nshssupjiarzhueqt4?optimizer=image",
      attack: 75,
      defense: 50,
      health: 25,
      cardFrame: 150,
      rarity: 50,
    },
  ];
  const [theme, setTheme] = useState({
    ...props.theme,
    walletAddress:
      JSON.parse(window.localStorage.getItem("leaguesaddress")) || null,
    walletType:JSON.parse(JSON.stringify(window.localStorage.getItem("walletType"))) || null,
    ASAInfos: ASAInfos,
    oriItems: oriItems,
    legendItems: legendItems,
    neapItems: neapItems,
    epicItems: epicItems,
    rareItems: rareItems,
  });

  const GlobalStyle = createGlobalStyle`

    @media (min-width: 578px) {
      /** Mozilla scrollbar*/
      * {
        scrollbar-color: #CCC !important;
        scrollbar-width: thin !important;
      }

      /** Scrollbar for browser based on webkit */
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      ::-webkit-scrollbar-thumb {
        background: #6b6b6b;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #AFAFAF;
      }
      ::-webkit-scrollbar-thumb:active {
        background: #6b6b6b;
      }
      ::-webkit-scrollbar-track {
        background: rgba(204, 204, 204, 0.3);
      }
    }

    body {
      font-family: '${theme.fonts.primary?.name || "Helvetica"}', sans-serif;
      margin: 0;
      background-color: #FFFFFF;
      color: ${(props) => props.theme.colors?.headingColor || "#000"};

      ${
        theme.rtl &&
        css`
          direction: rtl;
        `
      }
    }

    * {
      box-sizing: border-box;
    }

    input, textarea, button {
      font-family: inherit;
    }
  `;

  useEffect(() => {
    const fonts = Object.entries(theme.fonts || {});
    fonts.forEach(([name, fontFamily]) => {
      if (!window.document.getElementById(`${name}-font-styles`)) {
        const font = window.document.createElement("link");
        font.id = `${name}-font-styles`;
        font.rel = "stylesheet";
        font.async = true;
        font.defer = true;
        font.href = `https://fonts.googleapis.com/css2?family=${
          fontFamily.name
        }:wght@${fontFamily.weights.join(";")}&display=swap`;

        window.document.body.appendChild(font);
      }
    });
  }, [theme]);

  const update = (theme) => {
    setTheme(theme);
  };

  const merge = (partTheme) => {
    setTheme({
      ...theme,
      ...partTheme,
    });
  };

  return (
    <ThemeContext.Provider value={[theme, { update, merge }]}>
      <ThemeProviderStyled theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};

/**
 * Hook to get theme state
 */
export const useTheme = () => {
  const themeManager = useContext(ThemeContext);
  return themeManager || [{}];
};
