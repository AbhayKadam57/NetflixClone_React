import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import Data from "../LanguageTranslate";

const Container = styled.div`
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  /* background-color: red; */
  padding: 20px;
`;

const MainBox = styled.div`
  /* background-color: blue; */
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: "Open sans";
  font-weight: 700;
  font-size: 3.9em;
`;

const SubTitle = styled.h2`
  font-family: "Open sans";
  font-weight: 400;
  font-size: 1.5em;
`;

const NewTitle = styled.h3`
  font-family: "Open sans";
  font-weight: 400;
  font-size: 1.2em;
  margin-top: 2em;
`;

const GetStartedTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 4em;
  margin-top: 15px;
`;

const Button = styled.button`
  flex: 2;
  background-color: #e50914;
  color: white;
  height: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  cursor: pointer;

  p {
    font-family: "Open sans";
    font-size: 2em;
    font-weight: 500;
  }
`;

const InputTitle = styled.input`
  flex: 5;
  height: 100%;
  border: none;
  font-family: "Open sans";
  font-size: 1em;
  padding: 10px;
`;

const Arrow = styled.div`
  font-size: 1.4em;
  display: flex;
`;

const Welcome = () => {
  const { Language } = useContext(LanguageContext);

  return (
    <Container>
      <MainBox>
        <Title>
          {Language === "hindi"
            ? Data.title
            : "Unlimited movies, TV shows and more."}
        </Title>
        <SubTitle>
          {Language === "hindi"
            ? Data.subtitle
            : "Watch anywhere. Cancel anytime."}
        </SubTitle>
        <NewTitle>
          {Language === "hindi"
            ? Data.note
            : "Ready to watch? Enter your email to create or restart your membership."}
        </NewTitle>
        <GetStartedTitle>
          <InputTitle placeholder="Email address" />
          <Link
            to="/signin"
            // to={user === checkUser ? "/profiles" : "/"}
            style={{ textDecoration: "none" }}
          >
            <Button>
              <p>{Language === "hindi" ? Data.button : "Get started"}</p>
              <Arrow>
                <FontAwesomeIcon icon={faChevronRight} />
              </Arrow>
            </Button>
          </Link>
        </GetStartedTitle>
      </MainBox>
    </Container>
  );
};

export default Welcome;
