import "./components/styles.scss";
import Navbar from "./components/Navbar";
import Title from "./components/content/Title";
import About from "./components/content/About";
import Statistics from "./components/content/Statistics";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <About />
      <Statistics />
    </div>
  );
}

export default App;
