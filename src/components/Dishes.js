import React, { useState, useEffect } from "react";

function Dishes({ id, title }) {
  const [dishes, setDishes] = useState({ hits: [] });
  const APP_ID = "271b281a";
  const APP_KEY = "88c627abf78667444cf4d804190f1b2c";
  const url = `
    https://api.edamam.com/search?q=${id}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDishes(data.hits));
    // .then((data) => console.log(data.hits));
  }, []);
  return (
    <ul>
      {dishes.hits.map((dish, i) => (
        <div key={i} />
      ))}
    </ul>
  );
}

export default Dishes;
