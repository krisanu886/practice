import { useState } from "react";

const ButtonClick = () => {
  const color = "grey";
  const [bg, setBg] = useState(color);
  const [name, setName] = useState("Click Me");
  const bgChange = () => {
    let newBg = "aqua";
    setBg(newBg);
    setName("Ouch!!");
  };
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange}>{name}</button>
      </div>
    </>
  );
};
export default ButtonClick;
