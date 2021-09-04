import React from "react";
import { footerSocials } from "./footerData";
import FooterSocial from "./FooterSocial";

function FooterSocials() {
  return (
    <div className="footer_socials">
      {footerSocials.map((social, i) => (
        <FooterSocial href={social.href} icon={social.icon} delay={i} />
      ))}
    </div>
  );
}

export default FooterSocials;
