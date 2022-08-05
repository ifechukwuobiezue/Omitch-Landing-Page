// import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import LandingPage from "./LandingPage";
import design from "./assets/design.png";

function App() {
  return (
    <div className="App">
      <Nav />
      <img src={design} alt="Design pattern" className="design" />
      <LandingPage />
    </div>
  );
}

export default App;
