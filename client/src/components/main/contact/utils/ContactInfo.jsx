import React from "react";
import { Trans } from "react-i18next";

function ContactInfo(props) {
  return (
    <div className="contact_info">
      {props.icon}

      <a href={props.href}>
        <h3 className="contact_title">
          <Trans i18nKey={`contact.contactInfos.${props.trans}`}>
            {props.title}
          </Trans>
        </h3>
        <span className="contact_subtitle">{props.subtitle}</span>
      </a>
    </div>
  );
}

export default ContactInfo;
