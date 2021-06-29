import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";

import React, { useState, useEffect, useRef } from "react";
import Recipe from "./components/SearchResult";
import SearchResult from "./components/SearchResult";

const App = () => {
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

      // console.log(data.hits);
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

  // Prev and Next buttons
  const prevClick = () => {
    if (pagination === 0) {
      return;
    }
    setPagination(pagination - 3);
  };
  const nextClick = () => {
    setPagination(pagination + 3);
  };

  return (
    <div>
      <Router>
        <Nav />

        <Switch></Switch>
      </Router>
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
          />
        ))}
        <div className="p-nButtons">
          <p onClick={prevClick}>Prev</p>
          <p onClick={nextClick}>Next</p>
        </div>
      </div>
      {/* <button type="submit" className="search-btn">
        Search
      </button> */}
      {/* <div className="container">
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
      </div> */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
