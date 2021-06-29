import React from "react";

const Recipe = ({ title, calories, cuisine, image, ingredients }) => {
  return (
    <React.Fragment>
      <div>
        <h1>{title}</h1>
        <img src={image} alt="recipe-image" />
        <h3>Cuisine Type {cuisine}</h3>
        <h3>Calories : {calories}</h3>
        <h3>Ingredients:</h3>
        <ol>
          {ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient.text}</li>
          ))}
        </ol>
      </div>
    </React.Fragment>
  );
};

export default Recipe;
