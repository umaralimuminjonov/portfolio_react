import React from "react";
import { contactInfos } from "./contactData";
import ContactInfo from "./ContactInfo";

function ContactInfos() {
  return (
    <div>
      {contactInfos.map((info) => {
        return (
          <ContactInfo
            title={info.title}
            subtitle={info.subtitle}
            icon={info.icon}
            href={info.href}
            trans={info.trans}
          />
        );
      })}
    </div>
  );
}

export default ContactInfos;
