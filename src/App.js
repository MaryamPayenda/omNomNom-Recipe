import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import Recipe from "./components/Recipe";

import React, { useState, useEffect, useRef } from "react";
// import SearchResult from "./components/SearchResult";
import WrongTurn from "./components/WrongTurn";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/omNomNom-Recipe" component={Home} />
          <Route path="/about" component={About} />
          <Route path={() => "/main" || "/admin" || "/any-other-word"}>
            <WrongTurn />
          </Route>
        </Switch>
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
