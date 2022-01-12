import { useState } from "react";

const RefreshTime = () => {
  let time = new Date().toLocaleTimeString();
  const [newTime, setNewTime] = useState(time);
  const currTime = () => {
    time = new Date().toLocaleTimeString();
    setNewTime(time);
  };
  return (
    <>
      <h1>{time}</h1>
      <button onClick={currTime}>Refresh</button>
    </>
  );
};
export default RefreshTime;
