// import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchResult = ({
  title,
  calories,
  cuisine,
  image,
  ingredients,
  pagination,
  setPagination,
  id,
}) => {
  // console.log(id, title, calories);

  return (
    <div className="searchResult">
      <div className="flexStart">
        {/* shouldn't the click on the image open the recipe site? */}
        <img src={image} alt="recipe-image" />
        <h2>{title}</h2>

        <Link
          to={{
            pathname: "/Recipe",
            state: {
              id: id,
            },
          }}
        >
          More Info
        </Link>
      </div>
    </div>
  );
};
export default SearchResult;
