// import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchResult = ({ title, image, id, calories }) => {
  // console.log(id, title, calories);

  return (
    <div className="searchResult">
      <div className="flexStart">
        <Link
          to={{
            pathname: "/Recipe",
            state: {
              id: id,
            },
          }}
        >
          {" "}
          <img src={image} alt="recipe-image" />
        </Link>

        <Link
          to={{
            pathname: "/Recipe",
            state: {
              id: id,
            },
          }}
        >
          {" "}
          <h2>{title}</h2>
          {/* ingredients */}
        </Link>
      </div>
    </div>
  );
};
export default SearchResult;
