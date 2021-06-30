import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Nav from "./components/Nav";
import Home from "./components/Home";
import Recipe from "./components/Recipe";
import About from "./components/About";
import Footer from "./components/Footer";

import Dishes from "./components/Dishes";

import NavBar from "./components/nav/NavBar";

import Categories from "./components/Categories";

import React, { useState, useEffect, useRef } from "react";

import WrongTurn from "./components/WrongTurn";

import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        {/* <Nav /> */}
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/omNomNom-Recipe" exact component={Home} />
          <Route path="/categories" component={Categories} />

          <Route path="/recipe" component={Recipe} />
          <Route path="/about" component={About} />
          <Route
            path="/dishes/:id"
            component={({ match }) => {
              console.log(match);
              return <Dishes id={match.params.id} />;
            }}
          />

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
