import React from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
import { Trans } from "react-i18next";

function WorksContent(props) {
  return (
    <div data-aos="flip-right" className="works_content">
      <img
        data-aos="zoom-in"
        data-aos-delay="300"
        src={props.img}
        alt=""
        className="works_img"
      />
      <div className="works_data">
        <h3 data-aos="fade-right" data-aos-delay="400" className="works_title">
          <Trans i18nKey={`works.${props.id}.title`}>{props.title}</Trans>
        </h3>
        <p
          data-aos="fade-right"
          data-aos-delay="500"
          className="works_description"
        >
          <Trans i18nKey={`works.${props.id}.description`}>
            {props.description}
          </Trans>
        </p>
        <a
          data-aos="fade-right"
          data-aos-delay="600"
          href={props.href}
          className="works_link"
          target="_blank"
          rel="noreferrer"
        >
          <Trans i18nKey={`works.link`}>View</Trans>
          <UilArrowRight class="link_moving" />
        </a>
      </div>
    </div>
  );
}

export default WorksContent;
