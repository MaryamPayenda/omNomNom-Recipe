import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
// import SearchResult from "./components/Recipe";

import React, { useState, useEffect, useRef } from "react";
import SearchResult from "./components/SearchResult";

import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Categories" exact component={Categories} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
