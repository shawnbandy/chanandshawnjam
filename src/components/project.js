import React from 'react';
import { useEffect } from 'react';
import Canvas from './canvas';
import recovery from '../assets/images/recovery.png';
import recoveryTile from '../assets/images/recoveryTiles.png';
import pU from '../assets/images/character/main_run_up.png';
import pD from '../assets/images/character/main_run_down.png';
import pR from '../assets/images/character/main_run_right.png';
import pL from '../assets/images/character/main_run_left.png';
import pI from '../assets/images/character/main_idle.png';

const draw = async (c) => {
  c.fillStyle = 'white';
  const height = 1024;
  const width = 576;
  c.fillRect(0, 0, height, width);

  //*establishes the map and player
  const img = new Image();
  img.src = recoveryTile;
  const playerImage = new Image();
  playerImage.src = pI;
  const playerWalk = new Image();
  playerWalk.src = pD;

  //*renders the map and player
  img.onload = () => {
    c.drawImage(img, 0, 0);
    c.drawImage(
      playerImage,
      0,
      0,
      playerImage.width / 4.1,
      playerImage.height,
      height / 2 - playerImage.width / 3.3,
      width / 2 - playerImage.height / 2,
      playerImage.width / 4,
      playerImage.height
    );
  };
};

const renderMovement = () => {
  window.requestAnimationFrame(renderMovement);
};

const keyDown = (e) => {
  switch (e.key) {
    case 'w':
      break;
    case 'a':
      break;
    case 's':
      break;
    case 'd':
      break;
    default:
      break;
  }
};

function Project() {
  useEffect(() => {
    document.addEventListener('keydown', keyDown);
  });

  return (
    <section>
      <Canvas draw={draw} width={1024} height={576} />
    </section>
  );
}

export default Project;
