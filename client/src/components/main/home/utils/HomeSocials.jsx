import React from "react";
import { homeSocials } from "./homeData";
import HomeSocial from "./HomeSocial";
import { Bounce } from "react-reveal";

function HomeSocials() {
  return (
    <Bounce left>
      <div className="home_social">
        {homeSocials.map((social) => (
          <HomeSocial href={social.href} icon={social.icon} />
        ))}
      </div>
    </Bounce>
  );
}

export default HomeSocials;
