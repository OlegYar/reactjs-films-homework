import React from 'react';
import PropTypes from 'prop-types';

const VideoWindow = ({ videoKey }) => (
  <iframe
    width="100%"
    height="100%"
    src={`https://www.youtube.com/embed/${videoKey}`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

VideoWindow.propTypes = {
  videoKey: PropTypes.string.isRequired,
};

export default VideoWindow;
