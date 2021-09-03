import React from "react";
import WorksContents from "./utils/WorksContents";
import { Trans } from "react-i18next";

function Works() {
  return (
    <section className="works section" id="works">
      <h1 className="section_title">
        <Trans i18nKey="works.title">Works</Trans>
      </h1>
      <h1 className="bg-text">Works</h1>
      <div className="works_container container grid">
        <WorksContents />
      </div>
    </section>
  );
}

export default Works;
