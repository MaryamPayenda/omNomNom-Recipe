import React from "react";

const SearchResult = ({ title, calories, cuisine, image, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <a href={image} target="_blank">
        <img src={image} alt="recipe-image" />
      </a>
      <h3>Cuisine Type {cuisine}</h3>
      <h3>Calories : {calories}</h3>
      <h3>Ingredients:</h3>
      <ol>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};
export default SearchResult;
