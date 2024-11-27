export default function AnimateZombie(zombieObj, scale){
  let currentFrame = 0;
  const allFrames = 10;
  const trueSize = (2000 * scale);
  const frameWidth = trueSize / allFrames;
  zombieObj.style.backgroundSize = '${trueSize}px';
  function nextFrame(){
    const offsetX = -(currentFrame * frameWidth);
    zombieObj.style.backgroundPosition = '${offsetX}px 0';
    currentFrame = (currentFrame + 1) % allFrames;
  }

  setInterval(AnimateZombie , 100);
  
}