import React from "react";
import { Trans } from "react-i18next";
import ServicesContents from "./utils/ServicesContents";

function Services() {
  return (
    <section className="services section" id="services">
      <h1 className="section_title">
        <Trans i18nKey="services.title">Services</Trans>
      </h1>
      <div className="services_container container">
        <ServicesContents />
      </div>
    </section>
  );
}

export default Services;
