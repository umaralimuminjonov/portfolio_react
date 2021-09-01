import React from "react";
import { UilMessage } from "@iconscout/react-unicons";
import { Trans, useTranslation } from "react-i18next";

function Project() {
  useTranslation();
  return (
    <section className="project section">
      <div className="project_bg">
        <div className="project_container container grid">
          <div className="project_data">
            <h2 className="project_title">
              <Trans i18nKey="project.title">Sizda yangi loyiha bormi?</Trans>
            </h2>
            <p className="project_description">
              <Trans i18nKey="project.description">
                Hoziroq menga murojaat qiling. Birgalikda bu loyihani amalga
                oshiramiz.
              </Trans>
            </p>
            <a href="#contact" className="btn btn_flex btn_white">
              <Trans i18nKey="project.button">Murojaat</Trans>
              <UilMessage className="btn_icon btn_moving" />
            </a>
          </div>

          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Project;
