import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  const {
    snippet: { title, thumbnails },
  } = video;

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <div className="ui image">
        <img src={thumbnails.medium.url} alt={`${title} thumbnail`} />
      </div>
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
