import React from "react";
import { Trans } from "react-i18next";
import HomeSocials from "./utils/HomeSocials";
import Typed from "react-typed";

function Home() {
  var strings = [];

  if (localStorage.getItem("i18nextLng") === "ru") {
    strings = [
      "Full stack разработчик",
      "Frontend разработчик",
      "Backend разработчик",
      "Веб разработчик",
      "Фрилансер",
      "Студент",
    ];
  } else if (localStorage.getItem("i18nextLng") === "uz") {
    strings = [
      "Full stack dasturchi",
      "Frontend dasturchi",
      "Backend dasturchi",
      "Web dasturchi",
      "Frilanser",
      "Talaba",
    ];
  } else {
    strings = [
      "Fullstack developer",
      "Frontend developer",
      "Backend developer",
      "Web developer",
      "Frilancer",
      "Student",
    ];
  }

  return (
    <section className="home section" id="home">
      <div className="section_bg">
        <h1 className="bg-text">
          Umar
          <br />
          Ali
        </h1>
      </div>
      <div className="home_container container grid">
        <div className="home_content grid">
          <HomeSocials />
          <img src="" alt="" className="home_img" />
          <div className="home_data">
            <h1 data-aos="fade-right" className="home_title">
              <Trans i18nKey="home.title">Hi I'm UmarAli</Trans>
            </h1>
            <h4 className="home_subtitle">
              <Typed
                strings={strings}
                typeSpeed={50}
                backSpeed={40}
                loop={true}
              />
            </h4>
            <a data-aos="zoom-in" href="#contact" className="btn btn_home">
              <Trans i18nKey="home.button">Contact</Trans>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
