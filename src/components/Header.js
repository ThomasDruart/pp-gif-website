import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
  height: 10vh;
  background-color: #222b55;
  color: white;
  font-weight: bold;
  text-align: center;
`;

export default function Header() {
  return <HeaderStyled>Have fun with GIFs</HeaderStyled>;
}
