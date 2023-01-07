import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Originals from "../Components/Originals";
import Movies from "../Components/Movies";
import requests from "../Requests";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(28, 28, 28, 1);
  position: relative;
  height: 100%;
  max-width: 100vw;
  overflow: hidden;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <Navbar home={true} />
      <Banner request={requests.trending} />
      <Originals request={requests.Netflix_original} />
      <Movies heading={"Trending Now"} request={requests.trending} />
      <Movies heading={"Top Rated"} request={requests.top_rated} />
      <Movies heading={"Action Movies"} request={requests.action_movies} />
      <Movies heading={"Comedy Movies"} request={requests.comedy_movies} />
      <Movies heading={"Horror Movies"} request={requests.horror_movies} />
      <Movies heading={"Romantic Movies"} request={requests.romantic_movies} />
      <Movies heading={"Documentaries"} request={requests.Documentary} />
    </Wrapper>
  );
};

export default HomePage;
