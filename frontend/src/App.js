import React from "react";
import Header from "./components/Header";
import MakeRequestButton from "./components/MakeRequestButton";

function App() {
  return (
    <div className="flex-1 justify-center align-middle text-center">
      <Header />
      <MakeRequestButton />
    </div>
  );
}

export default App;
