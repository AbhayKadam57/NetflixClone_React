import React, { useState, useEffect } from "react";
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

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 500px;
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
  height: 350px;
  width: 200px;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* flex-shrink: 0; */
  /* position: relative; */
  border-radius: 5px;
  background-color: green;

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

const Scroll = styled(Slider)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 300px;
  position: absolute;
`;

const Video = styled.video`
  width: 200px;
  height: 350px;
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

  // const handleChange = (type) => {
  //   if (type === "left") {
  //     change !== 0 && SetChange(change + 200);
  //   } else if (type === "right") {
  //     change !== -movies?.length * 150 && SetChange(change - 200);
  //   }
  // };

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

      // setMovies(response);
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
    // infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
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
      <Heading>Netflix Originals</Heading>
      {/* <Arrows direction="left" onClick={() => handleChange("left")}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Arrows> */}

      {/* <Posters> */}
      <Scroll {...settings}>
        {movies?.map((movie) => {
          return isHovering === movie.id ? (
            <Video
              key={movie.id}
              autoplay
              loop
              muted
              onMouseLeave={() => setIsHovering(-1)}
              onMouseEnter={(e) => e.target.play()}
            >
              <source src="../images/netflix.mp4" type="video/mp4"></source>
            </Video>
          ) : (
            <Poster
              key={movie.id}
              id={movie.id}
              ket={movie.id}
              onMouseEnter={(e) => setIsHovering(movie.id)}
              bg={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
          );
        })}
      </Scroll>
      {/* </Posters> */}

      {/* <Arrows direction="right" onClick={() => handleChange("right")}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Arrows> */}
    </Container>
  );
};

export default Originals;
