import React from "react";

function HomeSocial(props) {
  return (
    <a href={props.href} target="_blank" className="home_social-icon icon" rel="noreferrer">
      {props.icon}
    </a>
  );
}

export default HomeSocial;
