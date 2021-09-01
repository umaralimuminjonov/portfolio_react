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
    href: "email:umaralimuminjonov@gmail.com",
    icon: <UilEnvelope className="contact_icon" />,
    trans: "email",
  },
  {
    title: "Location",
    subtitle: "Bekabad, Tashkent",
    href: "map:98909042201",
    icon: <UilMapMarker className="contact_icon" />,
    trans: "map.title",
  },
];