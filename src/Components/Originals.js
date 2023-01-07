import React, { useState, useEffect } from "react";
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
`;

const Heading = styled.h1`
  color: white;
  text-transform: uppercase;
  font-size: 1.5em;
`;

const Posters = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Poster = styled.div`
  width: 200px;
  height: 300px;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: contain;
  flex-shrink: 0;
  position: relative;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Arrows = styled.div`
  position: absolute;
  top: 50%;
  color: white;
  font-size: 32px;
  cursor: pointer;
  padding: 10px;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "30px"};
  z-index: 10;
`;

const Scroll = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  transform: translateX(${(props) => `${props.value}px`});
  transition: all 0.5s linear;
  height: 350px;
  display: flex;
  align-items: center;
`;

const Video = styled.video`
  width: 200px;
  height: 300px;
  flex-shrink: 0;
  object-fit: cover;
  transition: all 0.3s linear;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Originals = ({ request }) => {
  const [change, SetChange] = useState(0);

  const [isHovering, setIsHovering] = useState(-1);

  const [movies, setMovies] = useState();

  console.log(change);

  const handleChange = (type) => {
    if (type === "left") {
      change !== 0 && SetChange(change + 200);
    } else if (type === "right") {
      change !== -movies?.length * 150 && SetChange(change - 200);
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
  }, []);

  return (
    <Container>
      <Heading>Netflix Originals</Heading>
      <Arrows direction="left" onClick={() => handleChange("left")}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Arrows>

      <Posters>
        <Scroll value={change} limit={movies?.length}>
          {movies?.map((movie) => {
            return isHovering === movie.id ? (
              <Video
                autoplay
                loop
                muted
                onMouseLeave={() => setIsHovering(-1)}
                onMouseEnter={(e) => e.target.play()}
              >
                <source src="../images/video1.mp4" type="video/mp4"></source>
              </Video>
            ) : (
              <Poster
                id={movie.id}
                onMouseEnter={(e) => setIsHovering(movie.id)}
                bg={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            );
          })}
        </Scroll>
      </Posters>

      <Arrows direction="right" onClick={() => handleChange("right")}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Arrows>
    </Container>
  );
};

export default Originals;
