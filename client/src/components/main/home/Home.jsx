import React from "react";
import { Trans } from "react-i18next";
import HomeSocials from "./utils/HomeSocials";

function Home() {
  return (
    <section className="home section" id="home">
      <h1 className="bg-text">
        Umar
        <br />
        Ali
      </h1>
      <div className="home_container container grid">
        <div className="home_content grid">
          <HomeSocials />
          <img src="" alt="" className="home_img" />
          <div className="home_data">
            <h1 className="home_title">
              <Trans i18nKey="home.title">Hi I'm UmarAli</Trans>
            </h1>
            <h4 className="home_subtitle">
              <Trans i18nKey="home.subtitle">Full stack developer</Trans>
            </h4>
            <a href="#contact" className="btn btn_home">
              <Trans i18nKey="home.button">Contact</Trans>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
