import React from "react";
import { Trans } from "react-i18next";
import ContactInfos from "./utils/ContactInfos";
import ContactForm from "./utils/ContactForm";
import ripplet from "ripplet.js";

function Contact() {
  document
    .querySelectorAll(".btn")
    .forEach((btn) => btn.addEventListener("mousedown", ripplet));

  document
    .querySelectorAll(".icon")
    .forEach((icon) => icon.addEventListener("mousedown", ripplet));

  document
    .querySelectorAll(".rpl")
    .forEach((rpl) => rpl.addEventListener("mousedown", ripplet));

  return (
    <section className="contact section" id="contact">
      <h1 className="section_title">
        <Trans i18nKey="contact.title">Contact</Trans>
      </h1>
      <h1 className="bg-text">Contact</h1>
      <div className="contact_container container grid">
        <ContactInfos />

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
