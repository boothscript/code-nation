import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
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
        <NavBar basketNumber={this.state.basket} />
        <Home addToCartFunc={this.addToBasket} />
      </>
    );
  }
}

export default App;
