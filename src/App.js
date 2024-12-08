import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <div className="App">
      {/* Navbar for navigation */}
      <Navbar />

      {/* Intro section with an ID for smooth scrolling */}
      <section id="home">
        <Intro />
      </section>

      {/* Skills section with an ID for smooth scrolling */}
      <section id="about">
        <Skills />
      </section>
    </div>
  );
}

export default App;
 