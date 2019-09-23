import React, { useState } from "react";

function Breeds(props) {
  const [dogBreeds, setDogBreeds] = useState([]);

  if (dogBreeds.length === 0)
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(jsonBlob => jsonBlob.message)
      .then(breedsObject => Object.keys(breedsObject))
      .then(newBreeds => setDogBreeds(newBreeds));

  return (
    <ol style={{ textAlign: "left" }}>
      {dogBreeds.map(dogBreed => (
        <li>
          <button onClick={() => props.setBreed(dogBreed)}>{dogBreed}</button>
        </li>
      ))}
    </ol>
  );
}

export default Breeds;
