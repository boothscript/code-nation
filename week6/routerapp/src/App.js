import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

class App extends React.Component {
  state = {
    basket: 0,
  };

  addToBasket = () => {
    this.setState({ basket: this.state.basket + 1 });
  };

  render() {
    return (
      <>
        <Router>
          <NavBar basketNumber={this.state.basket} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home addToCartFunc={this.addToBasket} />}
            />
            <Route exact path="/About" component={About} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
