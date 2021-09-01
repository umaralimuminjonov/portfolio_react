import React from "react";
import FooterLink from "./FooterLink";
import { footerLink } from "./footerData";

function FooterLinks() {
  return (
    <ul className="footer_links">
      {footerLink.map((link) => (
        <FooterLink title={link} />
      ))}
    </ul>
  );
}

export default FooterLinks;
