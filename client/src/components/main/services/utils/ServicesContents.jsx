import React from "react";
import ServicesContent from "./ServicesContent";
import { servicesData } from "./servicesData";

function ServicesContents() {
  return (
    <div className="services_contents">
      <div className="services_container">
        {servicesData.map((img, i) => (
          <ServicesContent img={img} id={i} />
        ))}
      </div>
    </div>
  );
}

export default ServicesContents;
