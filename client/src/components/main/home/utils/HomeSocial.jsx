import React from "react";

function HomeSocial(props) {
  return (
    <a href={props.href} className="home_social-icon icon" target="_blank" rel="noreferrer">
      {props.icon}
    </a>
  );
}

export default HomeSocial;
