import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiPineapple } from "react-icons/gi";

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
        <img src={dataObj ? dataObj.image : ""} alt="dish-mage" />{" "}
        <div className="twoBlocks">
          {" "}
          <div className="leftBlock">
            {" "}
            <p>
              <h3 className="design-span">Cuisine:&nbsp;</h3>
              {dataObj ? dataObj.cuisineType : "yummy"}
            </p>
            <p>
              <h3 className="design-span">Meal Type:&nbsp;</h3>
              {dataObj
                ? dataObj.mealType[0].toUpperCase()
                : //  +
                  //   dataObj.mealType.substring(1)
                  ""}
            </p>
            <p>
              <h3 className="design-span">Calories:&nbsp;</h3>
              {dataObj ? Math.floor(dataObj.calories) : ""}kcal
            </p>
            <p>
              <h3 className="design-span">Diet Label:&nbsp;</h3>
              {dataObj ? dataObj.dietLabels : ""}
            </p>
          </div>
          <div className="rightBlock">
            <p className="ing">
              <h3 className="design-span">Ingredients:</h3>
              <ul>
                {dataObj
                  ? dataObj.ingredients.map((item, i) => (
                      <li>
                        {/* <img src={item ? item.image : ""} /> */}
                        <i>
                          <GiPineapple />
                        </i>
                        {item.text}
                      </li>
                    ))
                  : ""}
              </ul>
            </p>
          </div>
        </div>
        <p className="linkP">
          {" "}
          <a href={dataObj ? dataObj.url : ""} target="_blank">
            go see the full Recipe
          </a>
        </p>
      </div>
    </div>
  );
};

export default Recipe;
