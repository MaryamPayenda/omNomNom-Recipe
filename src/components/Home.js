import React, { useState, useEffect, useRef } from "react";
import SearchResult from "./SearchResult";

const Home = () => {
  const APP_ID = "271b281a";
  const APP_KEY = "88c627abf78667444cf4d804190f1b2c";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState();
  const [pagination, setPagination] = useState(0);
  const [rPramater, setRPramater] = useState();
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

  return (
    <React.Fragment>
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
      <div className="container">
        {pagination}
        {console.log(recipes)}
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
    </React.Fragment>
  );
};

export default Home;
