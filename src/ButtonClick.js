import { useState } from "react";

const ButtonClick = () => {
  const color = "grey";
  const [bg, setBg] = useState(color);
  const [name, setName] = useState("Click Me");
  const bgChange = () => {
    // let newBg = "aqua";
    setBg("aqua");
    setName("Ouch!!");
  };
  const bgBack = () => {
    setBg("green");
    setName("Ailaaa!!");
  };
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onDoubleClick={bgBack} onClick={bgChange}>
          {name}
        </button>
      </div>
    </>
  );
};
export default ButtonClick;
