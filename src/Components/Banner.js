import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { MovieOpenContext } from "../MovieContext";

const Banners = styled.div`
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  height: 80vh;
  display: flex;
  align-content: center;
  justify-content: center;
  color: white;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(28, 28, 28, 1), transparent);
    height: 10em;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0)
    );
    height: 100%;
    width: 100%;
  }
`;

const Details = styled.div`
  position: absolute;
  left: 0;
  top: 30%;
  width: 40%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* background: linear-gradient(to top, rgba(0, 0, 0, 0.2) 60%, transparent); */

  @media (max-width: 1000px) {
    width: 80%;
  }

  h1 {
    font-size: 3em;

    @media (max-width: 600px) {
      font-size: 2em;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  background-color: rgba(20, 20, 20, 0.77);
  color: white;
  font-weight: bold;
  width: 5em;
  font-size: 1em;
  border-radius: 3px;
  border: none;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
    color: black;
  }

  @media (max-width: 768px) {
    width: 5em;
    font-size: 14px;
  }
`;

const Summary = styled.p`
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Banner = ({ request }) => {
  const [movies, setMovies] = useState();

  const [search, setSearch] = useState();

  const { dispatch } = useContext(MovieOpenContext);

  const Trim = (string) => {
    return string?.length > 150 ? string.substring(0, 150) + "..." : string;
  };

  useEffect(() => {
    let subscribe = true;

    const getData = async () => {
      let response;

      try {
        let data = await axios(request);

        response = await data.data.results;
      } catch (err) {
        console.log(err);
      }

      if (subscribe === true) {
        setMovies(response[Math.floor(Math.random() * 19)]);
      }
    };

    getData();

    return () => {
      subscribe = false;
    };
  }, [request]);

  const handleSearch = (title) => {
    setSearch(title);

    const options = {
      method: "GET",
      url: "https://youtube-data8.p.rapidapi.com/search/",
      params: { q: `${title}`, hl: "en", gl: "US" },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-data8.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);

        let query = response.data.contents[0].video.videoId;

        dispatch({ type: "OPEN", payload: { videoID: query, click: true } });
      })
      .catch(function (error) {
        console.error(error);
      });

    console.log(title);
  };

  return (
    <Banners
      bg={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
    >
      <Details>
        <h1>{movies?.name || movies?.original_title}</h1>
        <Buttons>
          <Button
            onClick={() => handleSearch(movies?.name || movies?.original_title)}
          >
            Play
          </Button>
          <Button>My List</Button>
        </Buttons>
        <Summary>{Trim(`${movies?.overview}`)}</Summary>
      </Details>
    </Banners>
  );
};

export default Banner;
