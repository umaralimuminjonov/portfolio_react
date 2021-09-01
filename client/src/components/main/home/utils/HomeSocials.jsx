import React from "react";
import { homeSocials } from "./homeData";
import HomeSocial from "./HomeSocial";

function HomeSocials() {
  return (
    <div className="home_social">
      {homeSocials.map((social) => (
        <HomeSocial href={social.href} icon={social.icon} />
      ))}
    </div>
  );
}

export default HomeSocials;
