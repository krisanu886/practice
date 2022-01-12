import { useState } from "react";

const DigiClock = () => {
  let clock = new Date().toLocaleTimeString();
  const [updateTime, setUpdateTime] = useState(clock);
  const updateClock = () => {
    clock = new Date().toLocaleTimeString();
    setUpdateTime(clock);
  };
  setInterval(updateClock, 1000);
  return (
    <>
      <h1>{clock}</h1>
    </>
  );
};
export default DigiClock;
