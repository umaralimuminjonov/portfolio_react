import React from "react";
import { Trans } from "react-i18next";
import ContactInfos from "./utils/ContactInfos";
import ContactForm from "./utils/ContactForm";
import ripplet from "ripplet.js";

function Contact() {
  document
    .querySelectorAll(".btn")
    .forEach((btn) => btn.addEventListener("click", ripplet));

  document
    .querySelectorAll(".icon")
    .forEach((icon) => icon.addEventListener("click", ripplet));

  document
    .querySelectorAll(".rpl")
    .forEach((rpl) => rpl.addEventListener("click", ripplet));

  return (
    <section className="contact section" id="contact">
      <h1 className="section_title">
        <Trans i18nKey="contact.title">Contact</Trans>
      </h1>
      <div className="section_bg">
        <h1 className="bg-text">Contact</h1>
      </div>
      <div className="contact_container container grid">
        <ContactInfos />

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
