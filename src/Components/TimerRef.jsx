import { useEffect, useRef, useState } from "react";

const formatString = (val) => (val <= 9 ? `0${val}` : val);

function formatTimeToString(timeInSecs) {
  const seconds = timeInSecs % 60;

  const minutes = Math.floor(timeInSecs / 60) % 60;

  const hours = Math.floor(timeInSecs / 3600) % 60;

  return `${formatString(hours)} : ${formatString(minutes)} : ${formatString(
    seconds
  )}`;
}

const TimerRef = () => {
  const [time, setTime] = useState(3715);

  const intervalId = useRef(null);

  useEffect(() => {
    const cleanUp = () => {
      console.log(`cleanUp called`);
      clearInterval(intervalId.current);
    };
    return cleanUp;
  }, []);

  const startTimer = () => {
    if (intervalId.current) {
      console.log(`timer is already running`);
      return;
    }
    intervalId.current = setInterval(() => {
      console.log("interval running--->", Date.now());

      setTime((prevTime) => {
        if (prevTime === 1) {
          clearInterval(intervalId.current);
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
  };

  return (
    <div>
      <div
        style={{
          border: "2px dashed black",
          margin: "40px",
          backgroundColor: "lightskyblue",
        }}
      >
        <h2>{formatTimeToString(time)}</h2>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button>Restart</button>
        <div></div>
      </div>
    </div>
  );
};

export { TimerRef };
//it is not understanding to me.
//useEffect ka callback fun ek fun return krta hai
//this is called a clean up fun.
