import "./App.css";
import {
  NavBar,
  Home,
  About,
  Education,
  Experience,
  Skills,
} from "./components";
import { CV } from "./cv/CV";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const { home, about, education, experience, languages, skills } = CV;

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route path="/about">
          <About about={about} />
        </Route>
        <Route path="/experience">
          <Experience experience={experience} />
        </Route>
        <Route path="/education">
          <Education education={education} />
        </Route>
        <Route path="/skills">
          <Skills languages={languages} skills={skills} />
        </Route>

        <Route path="">
          <Home home={home} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
