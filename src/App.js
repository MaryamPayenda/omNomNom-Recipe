import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import About from "./components/About";
import Recipe from "./components/Recipe";
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
          {/* <Route path="/Recipe" exact component={Recipe} /> */}
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
   
   <Footer />
    </div>
  );
};

export default App;
