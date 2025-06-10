import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
  
     <Search/>
      <footer className="text-white text-center">
        This project was coded by Somayyeh Seyedi and it is open-sourced on{" "}
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
