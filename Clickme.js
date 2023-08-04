import React, { useState, useEffect } from 'react';


function Clickme() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameRunning, setGameRunning] = useState(true);

  useEffect(() => {
    if (gameRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameRunning(false);
    }
  }, [gameRunning, timeLeft]);

  const handleImageClick = () => {
    if (gameRunning) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleTopClick = () => {
    if (gameRunning) {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }
  };

  const restartGame = () => {
    setScore(0);
    setTimeLeft(10);
    setGameRunning(true);
  };

  return (
    <div className="App">
      <h1 className='c'>Click-Me</h1><br/><br/>
      <p className='c'>Click the animal picture as many times as you can in {timeLeft} wacky seconds wacky seconds</p>
      <div className="image-container">
        <img src="https://rnz-ressh.cloudinary.com/image/upload/s--BAeq7kPQ--/c_scale,f_auto,q_auto,w_1050/v1644131383/4N8968X_copyright_image_203324" alt="Click Me!" width="300" height="300" onClick={handleImageClick} />
        <div className="top-click-area" onClick={handleTopClick}></div>
      </div><br/>
      <p className='c'>Score: {score}</p>
      {/* {!gameRunning && <p className='c'>Score: {score}</p>} */}
      <p className='c'>Enough! I can't be beaten by you</p>
      <button onClick={restartGame} disabled={gameRunning}>Restart Game</button>
    </div>
  );
}

export default Clickme;