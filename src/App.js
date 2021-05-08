import "./components/styles.scss";
import Navbar from "./components/Navbar";
import Title from "./components/content/Title";
import About from "./components/content/About";
import Statistics from "./components/content/Statistics";
import Skils from "./components/content/Skils";
import Works from "./components/content/WorksPackage/Works";
import ContactMe from "./components/content/ContactMe";
import Footer from "./components/content/Footer";
import TechList from "./components/content/TechList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <div id="about">
        <About />
        <Statistics />
        <Skils />
      </div>
      <Works />
      <div id="contact">
        <TechList />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
