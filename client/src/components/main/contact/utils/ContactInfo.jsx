import React from "react";
import { Trans } from "react-i18next";

function ContactInfo(props) {
  return (
    <div className="contact_info">
        <a href={props.href} data-aos="zoom-in" data-aos-delay="200">
          {props.icon}
        </a>

      <a href={props.href}>
        <h3 data-aos="fade-right" className="contact_title">
          <Trans i18nKey={`contact.contactInfos.${props.trans}`}>
            {props.title}
          </Trans>
        </h3>
        <span
          data-aos="fade-right"
          data-aos-delay="200"
          className="contact_subtitle"
        >
          {props.subtitle}
        </span>
      </a>
    </div>
  );
}

export default ContactInfo;
