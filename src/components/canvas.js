import React, { useRef, useEffect } from 'react';

const Canvas = ({ draw, height, width }) => {
  const canvas = React.useRef();

  return <canvas ref={canvas} width={width} height={height}></canvas>;
};

export default Canvas;
