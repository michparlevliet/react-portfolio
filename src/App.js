import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <h3>Skills</h3>
        <Skills />
      </div>
      <div id="projects">
        <h3>Projects</h3>
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
