
import React, { useState, useEffect } from "react";
import Recipe from "./components/Recipe";
//import Search from "./components/Search";
// import SearchResult from "./components/SearchResult";

const App = () => {
  const APP_ID = "271b281a";
  const APP_KEY = "88c627abf78667444cf4d804190f1b2c";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Arabic");

  useEffect(async () => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
    };

    getRecipes();
  }, [query]);

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
    <div>
      {/* <Search /> */}
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
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            cuisine={recipe.recipe.cuisineType}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};


export default App;
