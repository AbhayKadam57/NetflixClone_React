import React, { useEffect, lazy, Suspense, useContext, useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
// import Youtube from "../Components/YoutubePlay";
import { MovieOpenContext, MovieProvider } from "../MovieContext";
// import Banner from "../Components/Banner";
// import Originals from "../Components/Originals";
// import Movies from "../Components/Movies";
import requests from "../Requests";

const Banner = lazy(() => import("../Components/Banner"));

const Originals = lazy(() => import("../Components/Originals"));

const Movies = lazy(() => import("../Components/Movies"));

const Loader = lazy(() => import("../Components/Loader"));

const Youtube = lazy(() => import("../Components/YoutubePlay"));

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(28, 28, 28, 1);
  position: relative;
  height: 100%;
  max-width: 100vw;
  overflow: hidden;
`;

const YoutubeScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const HomePage = () => {
  const { click, dispatch } = useContext(MovieOpenContext);

  const [close, setClose] = useState(true);

  return (
    <Wrapper>
      <Suspense fallback={<Loader />}>
        <Navbar home={true} />
        <Banner request={requests.trending} />
        <Originals request={requests.Netflix_original} />

        <Movies heading={"Trending Now"} request={requests.trending} />

        <Movies heading={"Top Rated"} request={requests.top_rated} />
        <Movies heading={"Action Movies"} request={requests.action_movies} />
        <Movies heading={"Comedy Movies"} request={requests.comedy_movies} />
        <Movies heading={"Horror Movies"} request={requests.horror_movies} />
        <Movies
          heading={"Romantic Movies"}
          request={requests.romantic_movies}
        />
        <Movies heading={"Documentaries"} request={requests.Documentary} />
        {click ? (
          <YoutubeScreen onClick={() => dispatch({ type: "CLOSE" })}>
            <Suspense fallback={<Loader />}>
              <Youtube />
            </Suspense>
          </YoutubeScreen>
        ) : (
          ""
        )}
      </Suspense>
    </Wrapper>
  );
};

export default HomePage;
