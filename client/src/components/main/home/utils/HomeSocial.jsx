import React from "react";

function HomeSocial(props) {
  return (
    <a
      data-aos="fade-right"
      data-aos-delay={100 + 100 * props.delay}
      href={props.href}
      className="home_social-icon icon"
      target="_blank"
      rel="noreferrer"
    >
      {props.icon}
    </a>
  );
}

export default HomeSocial;
