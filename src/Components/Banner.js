import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
  h1 {
    font-size: 3em;
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
`;

const Summary = styled.p`
  font-weight: 600;
`;

const Banner = ({ request }) => {
  const [movies, setMovies] = useState();

  const Trim = (string) => {
    return string?.length > 150 ? string.substring(0, 150) + "..." : string;
  };

  useEffect(() => {
    let subscribe = true;

    const getData = async () => {
      let response = await axios(request).then((res) => {
        return res.data.results;
      });

      if (subscribe === true) {
        setMovies(response[Math.floor(Math.random() * 19)]);
      }
    };

    getData();

    return () => {
      subscribe = false;
    };
  }, []);

  return (
    <Banners
      bg={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
    >
      <Details>
        <h1>{movies?.name || movies?.original_title}</h1>
        <Buttons>
          <Button>Play</Button>
          <Button>My List</Button>
        </Buttons>
        <Summary>{Trim(`${movies?.overview}`)}</Summary>
      </Details>
    </Banners>
  );
};

export default Banner;
