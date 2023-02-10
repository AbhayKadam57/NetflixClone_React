import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProfileConetxt } from "../ProfileContext";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { UserContext } from "../UserContext";

const Container = styled.div`
  position: absolute;
  top: 75%;
  right: 2%;
  min-width: 10%;
  padding: 10px;
  background-color: #000;
  z-index: 10;
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  gap: 20px;

  button {
    padding: 10px;
    background-color: red;
    border: none;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 2em;
    height: 2em;
  }

  p {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const UserDetails = ({ open }) => {
  const { selected } = useContext(ProfileConetxt);

  const { username } = useContext(UserContext);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .then(() => localStorage.clear())
      .then(() => window.location.assign("/login"))
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Container open={open}>
      <Section>
        <img src={selected?.image || `../images/profile1.jpg`} />
        <p>
          {selected?.name || username?.email}
          <Link style={{ fontSize: "12px", color: "red" }} to="/profiles">
            Change Avatar
          </Link>
        </p>
      </Section>
      <button onClick={() => handleClick()}>Logout</button>
    </Container>
  );
};

export default UserDetails;
