import React, { useState } from "react";
import { axios } from "./config";

function App() {
  const [displayText, setDisplayText] = useState("");

  const makeRequest = () => {
    console.log(process.env.REACT_APP_DEV_URL);
    setDisplayText("Loading...");
    axios
      .get("/test")
      .then((e) => {
        setDisplayText(e.data.hello);
        console.log(e.data);
      })
      .catch((e) => {
        setDisplayText("Error Fetching Data");
        console.error(e);
      });
  };

  return (
    <div className="flex-1 justify-center align-middle text-center">
      <h1 className={`font-bold text-5xl`}>Press the button</h1>
      <br />
      <p className="text-3xl mb-3">{displayText}</p>
      <button
        className={`flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-2001`}
        onClick={makeRequest}
      >
        Press to Request
      </button>
    </div>
  );
}

export default App;
