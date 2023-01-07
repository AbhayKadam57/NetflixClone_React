import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  h2 {
    color: white;
  }
`;

const SlideBox = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Movie = styled.div`
  width: 200px;
  height: 120px;
  background-color: red;
  transition: all 0.3s ease;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  position: relative;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;

    &:after {
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0.8),
        transparent
      );
    }
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
`;

const Slide = styled.div`
  display: flex;
  gap: 20px;
  transform: translateX(${(props) => `${props.value}px`});
  transition: all 0.3s ease;
  padding: 10px;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  font-size: 1.5em;
  color: white;
  left: ${(props) => props.direction === "left" && "0"};
  right: ${(props) => props.direction === "right" && "0"};
  cursor: pointer;
`;

const Title = styled.h3`
  position: absolute;
  left: 10%;
  bottom: 10%;
  right: 10%;
  color: white;
  z-index: 1;
  font-size: 16px;
`;

const Movies = ({ heading, request }) => {
  const [change, setChange] = useState(0);

  const [movies, setMovies] = useState();

  const [isHover, setHover] = useState(-1);

  const handleClick = (direction) => {
    if (direction === "right") {
      setChange(change - 100);
    } else if (direction === "left") {
      setChange(change + 100);
    }
  };

  useEffect(() => {
    let subscribe = true;

    const getData = async () => {
      let response = await axios(request).then((res) => {
        return res.data.results;
      });

      if (subscribe === true) {
        setMovies(response);
      }
    };

    getData();

    return () => {
      subscribe = false;
    };
  });

  return (
    <Container>
      <h2>{heading}</h2>
      <SlideBox>
        <Arrow direction="left" onClick={(e) => handleClick("left")}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Arrow>
        <Slide value={change}>
          {movies?.map((movie) => {
            return (
              <Movie
                movie={`${movie.name}`}
                bg={`https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.poster_path
                }`}
                onMouseOver={() => setHover(movie.id)}
                onMouseLeave={() => setHover(-1)}
              >
                {isHover === movie.id ? (
                  <Title>{movie.name || movie.original_title}</Title>
                ) : (
                  ""
                )}
              </Movie>
            );
          })}
        </Slide>
        <Arrow direction="right" onClick={(e) => handleClick("right")}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Arrow>
      </SlideBox>
    </Container>
  );
};

export default Movies;
