import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button
        onClick={async () => {
          const data = await fetch("http://localhost:4000").then((res) =>
            res.json()
          );
          console.log(data);
        }}
      >
        click me
      </button>
    </div>
  );
}

export default App;
