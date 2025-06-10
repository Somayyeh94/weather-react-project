import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  return (
    <div className="App">
      <h1>Weather application</h1>
      <button className="btn btn-primary">search</button>
      <footer>
        This projedt was coded by Somayyeh Seyedi and it is open-sourced on{" "}
        <a
          href="https://github.com/Somayyeh94/weather-react-project"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
