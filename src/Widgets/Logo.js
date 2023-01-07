import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const LogoDiv = styled.div`
  min-width: 15%;
  height: 4.9em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Logo = () => {
  return (
    <Link to="/">
      <LogoDiv>
        <img src="../images/logo.png" />
      </LogoDiv>
    </Link>
  );
};

export default Logo;
