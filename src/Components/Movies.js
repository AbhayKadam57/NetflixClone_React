import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { MovieOpenContext } from "../MovieContext";

const Container = styled.div`
  padding: 30px;
  display: flex;
  align-content: center;
  justify-content: center;
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
  flex-direction: row;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Movie = styled.div`
  width: 200px;
  height: 120px;
  transition: all 0.3s ease;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  z-index: 10;

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

const Slide = styled(Slider)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  transform: translateX(${(props) => `${props.value}px`});
  transition: all 0.3s ease;
  padding: 10px;
  /* background-color: red; */
  height: 150px;
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

  const [loaded, setLoaded] = useState(false);

  const [search, setSearch] = useState();

  const { dispatch } = useContext(MovieOpenContext);

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

  // const handleClick = (direction) => {
  //   if (direction === "right") {
  //     setChange(change - 240);
  //   } else if (direction === "left") {
  //     setChange(change + 240);
  //   }
  // };

  useEffect(() => {
    let subscribe = true;

    let response;

    const getData = async () => {
      try {
        let data = await axios(request);

        response = await data.data.results;
      } catch (err) {
        console.log(err);
      }

      if (subscribe === true) {
        setMovies(response);
      }
    };

    getData();

    return () => {
      subscribe = false;
    };
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <h2>{heading}</h2>
      {/* <SlideBox> */}
      {/* <Arrow direction="left" onClick={(e) => handleClick("left")}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Arrow> */}
      <Slide value={change} {...settings}>
        {movies?.map((movie) => {
          return (
            <Movie
              onClick={() => handleSearch(movie.name || movie.original_title)}
              key={movie.id}
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
      {/* <Arrow direction="right" onClick={(e) => handleClick("right")}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Arrow> */}
      {/* </SlideBox> */}
    </Container>
  );
};

export default Movies;
