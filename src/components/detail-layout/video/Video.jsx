import React from "react";
import YouTube from "react-youtube";
import "./video.scss";

const Video = () => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div className="section mb-3">
      <div className="video">
        <h2 className="video__title">Disney+ Announcement</h2>
        <div className="">
          <div className="video__youtube">
            <YouTube
              className="youtube-player"
              videoId="ipA03zcKZXc"
              opts={opts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
