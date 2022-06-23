import React from "react";
// import YouTube from "react-youtube";
import "./video.scss";

const Video = ({ trailer }) => {
  // const opts = {
  //   height: "100%",
  //   width: "100%",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 0,
  //     // host: "https://www.youtube.com",
  //   },
  // };

  return (
    <div className="section mb-3">
      <div className="video">
        <h2 className="video__title">{trailer.name}</h2>
        <div className="">
          <div className="video__youtube">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailer.key}`}
            ></iframe>

            {/* <YouTube
              className="youtube-player"
              videoId={trailer.key}
              opts={opts}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
