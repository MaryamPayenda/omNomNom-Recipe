import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Nav from "./components/Nav";
// import NavBar from "./components/nav/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Recipe from "./components/Recipe";
// import SearchResult from "./components/Recipe";

import React, { useState, useEffect, useRef } from "react";
import SearchResult from "./components/SearchResult";

const App = () => {
  return (
    <div>
      <Router>
        {/* <Nav /> */}
        <Home />
        <Switch></Switch>
      </Router>
      <Footer />
    </div>
  );
};
export default App;
