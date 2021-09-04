import React from "react";
import { homeSocials } from "./homeData";
import HomeSocial from "./HomeSocial";

function HomeSocials() {
  return (
    <div className="home_social">
      {homeSocials.map((social, i) => (
        <HomeSocial href={social.href} icon={social.icon} delay={i} />
      ))}
    </div>
  );
}

export default HomeSocials;
