// import { useState } from "react";
import './App.css';
import { Home, AboutMe, Education, Experience, Skills } from "./components";
import { CV } from "./cv/CV";

const { home, aboutMe, education, experience, languages, skills } = CV;

function App() {
   return (
      <div className="App">
        <Home home={home}/>
        {/* <AboutMe aboutMe={aboutMe}/>
        <Education education={education}/>
        <Experience experience={experience}/>
        <Skills 
          languages={languages}
          skills={skills}
        /> */}
      </div>
   );
};

export default App;
