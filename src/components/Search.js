import React, { useState } from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search)
  };
  const getSearch = (e) => {
    e.preventDefault();
    // setQuery(search);
    setSearch("");
  };
  return (
    <form onSubmit={getSearch}>
      <input
        type="text"
        className="search-bar"
        value={search}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
