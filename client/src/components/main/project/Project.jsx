import React from "react";
import { UilMessage } from "@iconscout/react-unicons";
import { Trans } from "react-i18next";
import Tilt from "react-parallax-tilt";

function Project() {
  return (
    <section className="project section">
      <div className="project_bg">
        <Tilt tiltMaxAngleX="8" tiltMaxAngleY="8">
          <div className="project_container container grid">
            <div className="project_data">
              <h2 data-aos="flip-right" className="project_title">
                <Trans i18nKey="project.title">Sizda yangi loyiha bormi?</Trans>
              </h2>
              <p data-aos="flip-right" className="project_description">
                <Trans i18nKey="project.description">
                  Hoziroq menga murojaat qiling. Birgalikda bu loyihani amalga
                  oshiramiz.
                </Trans>
              </p>
              <a
                data-aos="zoom-in"
                href="#contact"
                className="btn btn_flex btn_white"
              >
                <Trans i18nKey="project.button">Murojaat</Trans>
                <UilMessage className="btn_icon btn_moving" />
              </a>
            </div>

            <img src="" alt="" />
          </div>
        </Tilt>
      </div>
    </section>
  );
}

export default Project;
