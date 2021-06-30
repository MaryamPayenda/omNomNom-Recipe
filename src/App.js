import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Recipe from "./components/Recipe";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/Recipe" exact component={Recipe} />
          

     
          <Route path="/about" exact component={About} />

        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
