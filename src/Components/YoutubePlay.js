import React, { useContext } from "react";
import YouTube from "react-youtube";
import { MovieOpenContext, MovieProvider } from "../MovieContext";

const Youtube = () => {
  const { videoID } = useContext(MovieOpenContext);

  console.log(videoID);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  return <YouTube videoId={videoID} opts={opts} onReady={(e) => _onReady(e)} />;
};

export default Youtube;
