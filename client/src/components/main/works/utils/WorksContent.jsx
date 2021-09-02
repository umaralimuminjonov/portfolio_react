import React from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
import { Trans, useTranslation } from "react-i18next";

function WorksContent(props) {
  useTranslation();
  return (
    <div className="works_content">
      <img src={props.img} alt="" className="works_img" />
      <div className="works_data">
        <h3 className="works_title">
          <Trans i18nKey={`works.${props.id}.title`}>{props.title}</Trans>
        </h3>
        <p className="works_description">
          <Trans i18nKey={`works.${props.id}.description`}>
            {props.description}
          </Trans>
        </p>
        <a
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
