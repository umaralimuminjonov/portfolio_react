import React from "react";
import html from "../img/services_html.svg";
import css from "../img/services_css.svg";
import js from "../img/services_js.svg";
import bootstrap from "../img/services_bootstrap.svg";
import jquery from "../img/services_jquery.svg";
import react from "../img/services_react.svg";
import tailwind from "../img/services_tailwind.svg";
import mui from "../img/services_mui.svg";

function ServicesContents() {
  return (
    <div className="services_contents">
      <div className="services_circle">
        <div className="services_box">
          <img src={html} alt="" className="services_img" />
        </div>
        {/* <div style={{ transform: "translate(-215%, -215%)" }} className="services_box">
          <img src={css} alt="" className="services_img" />
        </div>
        <div style={{ transform: "translate(-315%, -215%)" }} className="services_box">
          <img src={js} alt="" className="services_img" />
        </div>
        <div style={{ transform: "translate(-215%, -315%)" }} className="services_box">
          <img src={bootstrap} alt="" className="services_img" />
        </div>
        <div style={{ transform: "translate(-50%, -415%)", padding: "0.75rem" }} className="services_box">
          <img src={jquery} alt="" className="services_img" />
        </div>
        <div style={{ transform: "translate(-50%, -315%)" }} className="services_box">
          <img src={react} alt="" className="services_img" />
        </div>
        <div style={{ transform: "translate(-415%, -50%)" }} className="services_box">
          <img src={tailwind} alt="" className="services_img" />
        </div>
        <div style={{ transform: "translate(315%, -50%)" }} className="services_box">
          <img src={mui} alt="" className="services_img" />
        </div> */}
      </div>
    </div>
  );
}

export default ServicesContents;
