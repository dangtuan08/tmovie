import React from "react";
import YouTube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";

import { closeModalVideo } from "../../slices/modalSlice";

import "./modalVideo.scss";
function ModalVideo() {
  const isActive = useSelector((state) => state.modalReducer.isActive);
  const idVideo = useSelector((state) => state.modalReducer.idVideo);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModalVideo());
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className={`modal-video ${isActive ? "active" : ""}`}>
      <div className="modal-body">
        {idVideo ? (
          <YouTube className="youtube-player" videoId={idVideo} opts={opts} />
        ) : (
          <div className="no-trailer">
            <h2>No Trailer</h2>
          </div>
        )}
        <button className="btn-close" onClick={handleClose}>
          X
        </button>
      </div>
      <div className="overlay" onClick={handleClose}></div>
    </div>
  );
}

export default ModalVideo;
