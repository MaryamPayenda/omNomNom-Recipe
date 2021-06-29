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
  // const prevClick = () => {
  //   if (pagination === 0) {
  //     return;
  //   }
  //   setPagination(pagination - 10);
  // };
  // const nextClick = () => {
  //   setPagination(pagination + 10);
  // };

  return (
    <div className="x">
      <div className="searchResult">
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
        <ol>
          {ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient.text}</li>
          ))}
        </ol> */}

      {/* <p onClick={prevClick}>Prev</p>
      <p onClick={nextClick}>Next</p> */}
    </div>
  );
};
export default SearchResult;
