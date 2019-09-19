import React from "react";
import Projects from "../Projects/Projects";
import SocialProfiles from "../SocialProfiles/SocialProfiles";
import Skills from "../Skills/Skills";
import Navbar from "../Navbar/Navbar";
import Bio from "../Bio/Bio";
import Intro from "../Intro/Intro";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Bio />
      <Skills />
      <Projects />
      <SocialProfiles />
    </div>
  );
}

export default App;
