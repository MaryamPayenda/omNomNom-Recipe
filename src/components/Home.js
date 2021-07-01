import React, { useState, useEffect, useRef } from "react";
import SearchResult from "./SearchResult";
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";

const Home = () => {
  const APP_ID = "271b281a";
  const APP_KEY = "88c627abf78667444cf4d804190f1b2c";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState();
  const [pagination, setPagination] = useState(0);

  // useref
  const prevSearchIdRef = useRef();
  useEffect(() => {
    prevSearchIdRef.current = search;
  });
  const prevSearch = prevSearchIdRef.current;

  // calling API

  useEffect(() => {
    const getRecipes = async () => {
      var currentPagination = pagination;

      if (prevSearch !== search) {
        currentPagination = 0;
        setPagination(0);
      }
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${currentPagination}&to=${
          currentPagination + 3
        }`
      );
      const data = await response.json();
      setRecipes(data.hits);

      console.log(data.hits);
    };

    getRecipes();
  }, [query, pagination]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search)
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  // Prev + Next Buttons
  const prevClick = () => {
    if (pagination === 0) {
      return;
    }
    setPagination(pagination - 18);
  };
  const nextClick = () => {
    setPagination(pagination + 18);
  };

  return (
    <React.Fragment>
      <div className="main">
        <div className="search">
          <form className="search-form" onSubmit={getSearch}>
            <input
              type="text"
              className="search-bar"
              value={search}
              onChange={handleSearch}
              placeholder="Search..."
            />
            <button type="submit" className="search-btn">
              Search
            </button>
          </form>
        </div>
        <h1>Get inspired...</h1>
        <div className="container">
          {/* {pagination}      */}

          <i onClick={prevClick} className="prev">
            <RiArrowDropLeftLine />
          </i>
          <div className="singleRecipe">
            {recipes.map(({ recipe, i }) => (
              <SearchResult
                pagination={pagination}
                setPagination={setPagination}
                key={i}
                title={recipe.label}
                cuisine={recipe.cuisineType}
                calories={recipe.calories}
                image={recipe.image}
                ingredients={recipe.ingredients}
                id={recipe.uri.split("_")[1]}
              />
            ))}
          </div>
          <i onClick={nextClick} className="next">
            <RiArrowDropRightLine />
          </i>
          <div className="mobileArrows">
            <i onClick={prevClick} className="mobilePrev">
              <RiArrowDropLeftLine />
            </i>
            <i onClick={nextClick} className="mobileNext">
              <RiArrowDropRightLine />
            </i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
