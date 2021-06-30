import React from "react";

const VideoItem = ({ video }) => {
  console.log(video);
  return (
    <div>
      <img
        alt={video.snippet.description}
        src={video.snippet.thumbnails.default.url}
      />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;
