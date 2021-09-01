import React from "react";

function FooterSocial(props) {
  return (
    <a href={props.href} className="footer_social" target="_blank" rel="noreferrer">
      {props.icon}
    </a>
  );
}

export default FooterSocial;
