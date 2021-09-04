import React from "react";
import FooterLinks from "./utils/FooterLinks";
import FooterSocials from "./utils/FooterSocials";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_bg">
        <div className="footer_container container grid">
          <h1 data-aos="fade-right" className="footer_title">UmarAli</h1>
          <FooterLinks />
          <FooterSocials />
        </div>

        <p className="footer_copy"><span>&#169;</span> UmarAli. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
