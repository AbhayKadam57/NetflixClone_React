import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Load = styled.div`
  width: 4em;
  height: 4em;
  border-radius: 50%;
  border: 5px solid #ddd;
  border-top: 5px solid #f54242;
  animation: rotate 1.4s infinite linear forwards;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
      border-top: 5px solid #f54242;
    }

    50% {
      transform: rotate(180deg);
      border-left: 5px solid #f54242;
    }

    100% {
      transform: rotate(360deg);
      border-left: 5px solid #f54242;
    }
  }
`;

const Loader = () => {
  return (
    <Container>
      <Load></Load>
    </Container>
  );
};

export default Loader;
