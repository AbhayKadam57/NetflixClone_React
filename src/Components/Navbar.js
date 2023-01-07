import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../Widgets/Logo";
import SignIn from "../Widgets/SignIn";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  height: 90px;
  width: 100%;
  padding: 2em;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.6),
    transparent
  );
`;

const LogoDiv = styled.div`
  width: 15%;
  height: 4.9em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ProfilePicture = styled.div`
  width: 2.5em;
  height: 2.5em;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Navbar = ({ on, home }) => {
  const [signOn, setSignOn] = useState(on);
  const [isHome, setIsHome] = useState(home);
  return (
    <Container>
      <Logo />
      {signOn ? <SignIn /> : ""}

      {isHome ? (
        <ProfilePicture>
          <img src="../images/profile1.jpg" />
        </ProfilePicture>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Navbar;
