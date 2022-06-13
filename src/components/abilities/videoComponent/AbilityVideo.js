import React from "react";
import "./AbilityVideo.scss";

function AbilityVideo({ abilityUrl }) {
  return (
    <video
      className="abilityVideo"
      key={Math.random()}
      src={abilityUrl}
      autoPlay
      controls
      playsInline
      type="video/mp4"></video>
  );
}

export default AbilityVideo;
