import React from "react";
import Home from "./home/Home";
import About from "./about/About";
import Works from "./works/Works";
import Project from "./project/Project";
import Contact from "./contact/Contact";

function Main() {
  return (
    <main className="main">
      <Home />
      <About />
      <Works />
      <Project />
      <Contact />
    </main>
  );
}

export default Main;
