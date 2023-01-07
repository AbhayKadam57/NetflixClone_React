import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";

const Wrapper = styled.div`
  background-color: #1a1a1a;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Profile = styled.div`
  height: 15em;
  width: 15em;
  background-color: red;
  overflow: hidden;
  border-radius: 1em;

  position: relative;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    background-color: rgba(59, 59, 59, 0.86);
    font-weight: 600;
    padding: 5px 8px;
    border-radius: 5px;
    display: none;
    transition: all 1s ease;
  }

  img {
    width: 100%;
    height: 100%;
    transform: scale(1.1);
    transition: all 0.5s;
  }

  &:hover {
    img {
      transform: scale(1);
      cursor: pointer;
    }

    div {
      display: block;
    }
  }
`;

const Plus = styled.div`
  width: 15em;
  height: 15em;
  border: 20px solid white;
  border-radius: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;

const Profiles = () => {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Profile>
          <img src="../images/profile1.jpg" />
          <div>Person 1</div>
        </Profile>
        <Profile>
          <img src="../images/profile1.jpg" />
          <div>Person 2</div>
        </Profile>
        <Plus>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: "12em" }} />
        </Plus>
      </Container>
    </Wrapper>
  );
};

export default Profiles;
