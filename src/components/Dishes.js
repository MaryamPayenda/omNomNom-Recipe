import React, { useState, useEffect, useRef } from "react";
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";

function Dishes({ id, title }) {
  const [dishes, setDishes] = useState([]);
  const APP_ID = "271b281a";
  const APP_KEY = "88c627abf78667444cf4d804190f1b2c";

  const url = `
    https://api.edamam.com/search?q=${id}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=63
      `;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDishes(data.hits));
    // .then((data) => console.log(data.hits));
  }, []);
  return (
    <div className="mainContainer">
      <h2>Different Testes</h2>
      <div className="container">
        <ul className="dishes">
          {dishes !== undefined
            ? dishes.map((item) => (
                <div className="li-design">
                  <img className="image" src={item.recipe.image} />
                  <li key={item.recipe.label}>{item.recipe.label}</li>
                  <li key={item.recipe.calories}>
                    Calories :{item.recipe.calories}
                  </li>
                  <li key={item.recipe.cuisineType}>
                    {" "}
                    <strong>Cuisin: </strong>
                    {item.recipe.cuisineType}
                  </li>
                  <li className="btn">
                    <a href={item.recipe.url} target="_blank">
                      See More
                    </a>
                  </li>
                </div>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default Dishes;
