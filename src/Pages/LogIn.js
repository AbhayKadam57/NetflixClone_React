import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Components/Footer";
import LogInForm from "../Components/LogInForm";
import Navbar from "../Components/Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  /* background-position: center; */
  background-size: cover;
  background: radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)),
    url(../images/mainBg.jpg);
`;

const SignUp = () => {
  return (
    <Container>
      <Wrapper>
        <Navbar on={false} />
        <Outlet />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default SignUp;
