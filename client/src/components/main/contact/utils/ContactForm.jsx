import React from "react";
import { UilQuestionCircle, UilMessage } from "@iconscout/react-unicons";
import useForm from "./useForm";
import validate from "./validateInfo";
import { Trans } from "react-i18next";
import AlertWrong from "./AlertWrong";
import AlertSuccess from "./AlertSuccess";

function ContactForm() {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);

  return (
    <form onSubmit={handleSubmit} className="contact_form grid" noValidate>
      <div className="contact_inputs grid">
        <div className={`contact_content ${errors.fname && "contact_invalid"}`}>
          <input
            type="text"
            className="contact_input"
            name="fname"
            id="fname"
            value={values.fname}
            onChange={handleChange}
            placeholder=" "
          />
          <label htmlFor="fname" className="contact_label">
            <Trans i18nKey="contact.labels.fname">First name</Trans>
          </label>
          <UilQuestionCircle className="contact_alert-icon icon" />
          <div className="contact_alert-text">
            {errors.fname && (
              <Trans i18nKey="contact.errors.fname">{errors.fname}</Trans>
            )}
          </div>
        </div>
        <div className={`contact_content ${errors.tel && "contact_invalid"}`}>
          <input
            type="tel"
            className="contact_input"
            name="tel"
            id="tel"
            value={values.tel}
            onChange={handleChange}
            placeholder=" "
          />
          <label htmlFor="tel" className="contact_label">
            <Trans i18nKey="contact.labels.tel">Phone number</Trans>
          </label>
          <UilQuestionCircle className="contact_alert-icon icon" />
          <div className="contact_alert-text">
            {errors.tel && (
              <Trans i18nKey={`contact.errors.tel.${errors.trans}`}>
                {errors.tel}
              </Trans>
            )}
          </div>
        </div>
      </div>
      <div class={`contact_content ${errors.text && "contact_invalid"}`}>
        <textarea
          cols="0"
          rows="7"
          className="contact_input"
          name="text"
          id="text"
          value={values.text}
          onChange={handleChange}
          placeholder=" "
        />
        <label htmlFor="text" className="contact_label">
          <Trans i18nKey="contact.labels.text">Message</Trans>
        </label>
        <UilQuestionCircle className="contact_alert-icon icon" />
        <div className="contact_alert-text">
          {errors.text && (
            <Trans i18nKey="contact.errors.msg">{errors.text}</Trans>
          )}
        </div>
      </div>

      <div>
        <button type="submit" className="btn btn_flex btn_contact">
          <Trans i18nKey="contact.button">Send</Trans>
          <UilMessage className="btn_icon btn_moving" />
        </button>
      </div>
      <AlertWrong />
      <AlertSuccess />
    </form>
  );
}

export default ContactForm;
