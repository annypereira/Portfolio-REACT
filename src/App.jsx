import "./App.css";
import { NavBar, Home, About, Education, Experience, Skills } from "./components";
import { CV } from "./cv/CV";

const { home, about, education, experience, languages, skills } = CV;

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home home={home} />
      <About about={about} />
      <Education education={education} />
      <Experience experience={experience} />
      <Skills languages={languages} skills={skills} />
    </div>
  );
}

export default App;
