import React, { Component } from "react";
import Projects from "../Projects/Projects";
import SocialProfiles from "../SocialProfiles/SocialProfiles";
import Skills from "../Skills/Skills";
import Navbar from "../Navbar/Navbar";
import Bio from "../Bio/Bio";

function App() {
  return (
    <div>
      <Navbar />
      <Bio />
      <Skills />
      <Projects />
      <SocialProfiles />
    </div>
  );
}

export default App;
