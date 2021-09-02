import {
  UilPhoneAlt,
  UilEnvelope,
  UilMapMarker,
} from "@iconscout/react-unicons";

export const contactInfos = [
  {
    title: "Phone number",
    subtitle: "+998909042201",
    href: "tel:+998909042201",
    icon: <UilPhoneAlt className="contact_icon" />,
    trans: "tel",
  },
  {
    title: "Email",
    subtitle: "umaralimuminjonov@gmail.com",
    href: "mailto:umaralimuminjonov@gmail.com",
    icon: <UilEnvelope className="contact_icon" />,
    trans: "email",
  },
  {
    title: "Location",
    subtitle: "Bekabad, Tashkent",
    href: "https://www.google.com/maps/@40.2134892,69.2623036,16.25z",
    icon: <UilMapMarker className="contact_icon" />,
    trans: "map.title",
  },
];
