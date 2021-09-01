import React from "react";
import Home from "./home/Home";
import About from "./about/About";
import Project from "./project/Project";
import Contact from "./contact/Contact";

function Main() {
  return (
    <main className="main">
      <Home />
      <About />
      <Project />
      <Contact />
    </main>
  );
}

export default Main;
