import React from "react";
import Home from "./home/Home";
import About from "./about/About";
import Services from "./services/Services";
import Works from "./works/Works";
import Project from "./project/Project";
import Contact from "./contact/Contact";

function Main() {
  const sections = document.querySelectorAll("section[id]");

  const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav_menu a[href*=" + sectionId + "]")
          .classList.add("active-link");
      } else {
        document
          .querySelector(".nav_menu a[href*=" + sectionId + "]")
          .classList.remove("active-link");
      }
    });
  };
  window.addEventListener("scroll", scrollActive);

  return (
    <main className="main">
      <Home />
      <About />
      <Services />
      <Works />
      <Project />
      <Contact />
    </main>
  );
}

export default Main;
