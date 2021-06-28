import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Footer />
      <Switch></Switch>
    </Router>
    // <div className="App"></div>;
  );
}

export default App;
