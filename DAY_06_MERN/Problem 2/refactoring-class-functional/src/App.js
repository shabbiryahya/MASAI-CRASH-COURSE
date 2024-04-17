import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // This function will run when the component unmounts
    return () => {
      clearInterval(timerID);
    };
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  return (
    <div>
      Seconds: {seconds}
    </div>
  );
};

export default Timer;
