import React, { useState } from "react";

function Dogs(props) {
  let defaultDogUrls = [];

  const [dogUrls, setDogUrls] = useState(defaultDogUrls);

  if (dogUrls === defaultDogUrls) {
    fetch(`https://dog.ceo/api/breed/${props.breed}/images`)
      .then(response => response.json())
      .then(jsonBlob => jsonBlob.message)
      .then(newDogs => setDogUrls(newDogs));
  }

  return dogUrls.map(dogUrl => <img src={dogUrl} />);
}

export default Dogs;
