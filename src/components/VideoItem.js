import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  console.log(video);
  return (
    <div className='video-item item'>
      <img onClick={() => onVideoSelect(video)} className='ui image'
          alt={video.snippet.description}
          src={video.snippet.thumbnails.medium.url}
      />
      <div className='content'>
        <div className='header'>
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
