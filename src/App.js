import logo from "./logo.svg";
import "./App.css";
import MyButton from "./MyButton";
import { useState } from "react";

function MyApp() {
  const [showButton, setShowbutton] = useState(true);
  return (
    <div>
      <p> Hello Abir ⚛️ </p>
      {showButton === true ? <MyButton /> : null}

      <button
        onClick={function () {
          setShowbutton(!showButton);
        }}
      >
        hide MyButton
      </button>
    </div>
  );
}

export default MyApp;
