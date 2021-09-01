import React from "react";
import { Trans, useTranslation } from "react-i18next";
import ContactInfos from "./utils/ContactInfos";
import ContactForm from "./utils/ContactForm";

function Contact() {
  useTranslation();

  function submitForm() {
    console.log("Send");
  }

  return (
    <section className="contact section" id="contact">
      <h1 className="section_title">
        <Trans i18nKey="contact.title">Contact</Trans>
      </h1>

      <div className="contact_container container grid">
        <ContactInfos />

        <ContactForm submitForm={submitForm} />
      </div>
    </section>
  );
}

export default Contact;
