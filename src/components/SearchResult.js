import React from "react";

const SearchResult = ({
  title,
  calories,
  cuisine,
  image,
  ingredients,
  pagination,
  setPagination,
}) => {
  return (
    <div className="searchResult">
      <div className="flexStart">
        {/* shouldn't the click on the image open the recipe site? */}
        <a href={image} target="_blank">
          <img src={image} alt="recipe-image" />
        </a>

        <a href="">
          <h2>{title}</h2>
        </a>
      </div>
      {/* <h3>Cuisine Type {cuisine}</h3>
        <h3>Calories : {Math.floor(calories)}kcal</h3> */}
      {/* <h3>Ingredients:</h3>

  const prevClick = () => {
    if (pagination === 0) {
      return;
    }
    setPagination(pagination - 9);
  };
  const nextClick = () => {
    setPagination(pagination + 9);
  };

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <a href={image} target="_blank" onClick={cuisine}>
          <img src={image} alt="recipe-image" />
        </a>

        <h3>Cuisine Type {cuisine}</h3>
        <h3>Calories : {Math.floor(calories)}</h3>
        <h3>Ingredients:</h3>

        <ol>
          {ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient.text}</li>
          ))}
        </ol> */}
    </div>
  );
};
export default SearchResult;
