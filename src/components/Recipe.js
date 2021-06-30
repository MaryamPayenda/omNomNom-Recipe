import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Recipe = () => {
  const [dataObj, setDataObj] = useState();
  const APP_ID = "271b281a";
  const APP_KEY = "88c627abf78667444cf4d804190f1b2c";

  const location = useLocation();
  const { id } = location.state;
  // console.log(id);
  // console.log("state", location.state);
  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${id}&app_id=${APP_ID}&app_key=${APP_KEY}
         
        `
      );
      const data = await response.json();
      setDataObj(data[0]);
    };

    getRecipe();
  }, []);

  // console.log(dataObj);

  return (
    <div className="recipe-container">
      <div className="single-recipe">
        <h2>{dataObj ? dataObj.label : ""}</h2>
        <img src={dataObj ? dataObj.image : ""} alt="dish-mage" />
        <p>

          <span className="calorie-span">Calories:&nbsp;</span>
          {dataObj ? Math.floor(dataObj.calories) : ""}kcal

          <span className="design-span">Cuisine: </span>
          {dataObj ? dataObj.cuisineType : ""}
        </p>
       
        <p>
          <span className="design-span">DietLable</span>
          {dataObj ? dataObj.dietLabels : ""}

        </p>
        <ul>

         
         

          <span className="design-span">ingredients</span>

          {dataObj
            ? dataObj.ingredients.map((item, i) => (
                <li>
                  {` and Ingredient ${item.text} 
                  
                `}
                  <img src={item ? item.image : ""} />
                </li>
              ))
            : ""}
        </ul>
        
        <a href={dataObj ? dataObj.url : ""} target="_blank">
          to see the Recipe
        </a>
      </div>
    </div>
  );
};

export default Recipe;
