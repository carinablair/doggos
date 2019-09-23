import React, { useState } from "react";
import "./App.css";
import Breeds from "./Breeds";
import Dogs from "./Dogs";

function App() {
  const [breed, setBreed] = useState(undefined);

  if (breed === undefined) {
    return (
      <div className="App">
        <Breeds setBreed={setBreed} />;
      </div>
    );
  }

  return (
    <div className="App">
      <button onClick={() => setBreed(undefined)}>Back</button>
      <h1>{breed}</h1>
      <p>
        <Dogs breed={breed} />
      </p>
    </div>
  );
}

export default App;
