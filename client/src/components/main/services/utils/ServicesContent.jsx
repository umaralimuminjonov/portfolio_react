import React from "react";

function ServicesContent({ img, id }) {
  return (
    <div style={{ animationDelay: `${id}00ms` }} className="services_box">
      <img src={img} alt="" className="services_img" />
    </div>
  );
}

export default ServicesContent;
