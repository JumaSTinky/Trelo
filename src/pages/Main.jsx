import React from "react";
import Cards from "../components/Cards";
import MainPicture from "../assets/MainPicture.jpg";
import styled from "styled-components";

export default function Main() {
  return (
    <>
      <Cards />
      <Picture src={MainPicture} alt="" />
    </>
  );
}

const Picture = styled.img`
  width: 99%;
  height: 93%;
  position: absolute;
  top: 50px;
  left: 0;
  z-index: -1;
`;
