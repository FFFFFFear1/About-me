import "./components/styles.scss";
import Navbar from "./components/Navbar";
import Title from "./components/content/Title";
import About from "./components/content/About";
import Statistics from "./components/content/Statistics";
import Skils from "./components/content/Skils";
import Works from "./components/content/WorksPackage/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <About />
      <Statistics />
      <Skils />
      <Works />
    </div>
  );
}

export default App;
