import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Canvas = ({ draw, height, width }) => {
  const canvas = React.useRef();

  React.useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    draw(ctx);
  });

  return <canvas ref={canvas} width={width} height={height}></canvas>;
};

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired, // ADDED
  width: PropTypes.number.isRequired, // ADDED
};

export default Canvas;
