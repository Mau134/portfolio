import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <section id="home">
        <Intro />
      </section>

      <section id="about">
        <Skills />
      </section>
      
      <section id="portfolio">
        <Works />
      </section>
    </div>
  );
}

export default App;
 