import React from 'react';
import Canvas from './canvas';
import recovery from '../assets/images/recovery.png';

const draw = async (c) => {
  c.fillStyle = 'white';
  c.fillRect(0, 0, 1024, 576);
  const img = new Image();
  img.src = recovery;
  img.onload = () => {
    c.drawImage(img, 0, 0);
  };
};

function Project() {
  return (
    <section>
      <Canvas draw={draw} width={1024} height={576} />
    </section>
  );
}

export default Project;
