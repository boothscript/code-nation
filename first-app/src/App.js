import "./App.css";
import React, { Component } from "react";

const Person = ({ name, age }) => {
  return <div>{`hi my name is ${name} and i'm ${age}.`}</div>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="Steve" age="35" />
        <Person name="James" age="22" />
        <Person name="Jim" age="50" />
      </div>
    );
  }
}

export default App;
