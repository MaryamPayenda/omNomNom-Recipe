import React from "react";

const SearchResult = ({ title, calories, cuisine, image, ingredients }) => {
  return (
    <div className="recipe">
      {" "}
      <img src={image} alt="recipe-image" />
      <h2>{title}</h2>
      {/* <div>
        <h4>Cuisine Type&nbsp;</h4>
        <p>{cuisine}</p>
      </div>
      <div>
        <h4>Calories:&nbsp;</h4> <p>{Math.floor(calories)}kcal</p>
      </div>
      <div>
        <h4>Ingredients:&nbsp;</h4>
        <ul>
          {ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient.text}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default SearchResult;
