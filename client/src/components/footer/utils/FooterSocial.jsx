import React from "react";

function FooterSocial(props) {
  return (
    <a
      data-aos="fade-down"
      data-aos-delay={100 + 100 * props.delay}
      href={props.href}
      className="footer_social"
      target="_blank"
      rel="noreferrer"
    >
      {props.icon}
    </a>
  );
}

export default FooterSocial;
