import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ProfileConetxt } from "../ProfileContext";
import Logo from "../Widgets/Logo";
import SignIn from "../Widgets/SignIn";
import UserDetails from "./UserDetails";

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
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Navbar = ({ on, home }) => {
  const [signOn, setSignOn] = useState(on);
  const [isHome, setIsHome] = useState(home);
  const [open, setOpen] = useState(false);

  const { selected } = useContext(ProfileConetxt);

  console.log(selected);

  return (
    <Container>
      <Logo />

      {signOn ? <SignIn /> : ""}

      {isHome ? (
        <ProfilePicture
          onClick={() => {
            open === true ? setOpen(false) : setOpen(true);
          }}
        >
          <img src={selected?.image || "../images/profile1.jpg"} />
        </ProfilePicture>
      ) : (
        ""
      )}
      <UserDetails open={open} />
    </Container>
  );
};

export default Navbar;
