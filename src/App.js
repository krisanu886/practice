import "./styles.css";
import Count from "./Count";
import ButtonClick from "./ButtonClick";
import DigiClock from "./DigiClock";
import RefreshTime from "./RefreshTime";

const App = () => {
  return (
    <div className="App">
      <h1>Hello Brothers!!</h1>
      <hr />
      <Count />
      <hr />
      <ButtonClick />
      <hr />
      <DigiClock />
      <hr />
      <RefreshTime />
      <hr />
    </div>
  );
};
export default App;
