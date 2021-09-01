import React from "react";
import { Trans, useTranslation } from "react-i18next";

function FooterLink(props) {
  useTranslation()
  return (
    <li>
      <a href={"#" + props.title.toLowerCase()} className="footer_link">
        <Trans i18nKey={"header." + props.title.toLowerCase()}>{props.title}</Trans>
      </a>
    </li>
  );
}

export default FooterLink;
