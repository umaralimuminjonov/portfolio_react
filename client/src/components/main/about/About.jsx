import React from "react";
import { UilImport } from "@iconscout/react-unicons";
import { Trans, useTranslation } from "react-i18next";
import aboutImg1 from "./img/about_img1.svg";
import aboutImg2 from "./img/about_img2.svg";
import aboutImg3 from "./img/about_img3.svg";
import aboutImg4 from "./img/about_img4.svg";
import aboutImg5 from "./img/about_img5.svg";
import aboutImg6 from "./img/about_img6.svg";

function About() {
  useTranslation();
  return (
    <section className="about section" id="about">
      <h1 className="section_title">
        <Trans i18nKey="about.title">About me</Trans>
      </h1>
      <div className="about_container container grid">
        <div className="about_data">
          <p className="about_description">
            <Trans i18nKey="about.description">
              Hello, I am 19 years old. I am currently a student. I study at the
              Tashkent State University of Economics. I have been interested in
              computer technology and exact sciences since I was young and I
              chose this field. I like solving algorithm tasks, solving tasks in
              css battle. Currently a freelancer, web programmer and student.
            </Trans>
          </p>
          <div className="btn_about">
            <a href="./pdf/UmarAli-cv.pdf" className="btn btn_flex">
              <Trans i18nKey="about.button">Download CV</Trans>
              <UilImport className="btn_icon" />
            </a>
          </div>
        </div>

        <div className="about_wrap">
          <div className="about_cube">
            <div className="about_img about_img1">
              <img src={aboutImg1} alt="" className="" />
            </div>
            <div className="about_img about_img2">
              <img src={aboutImg2} alt="" className="" />
            </div>
            <div className="about_img about_img3">
              <img src={aboutImg3} alt="" className="" />
            </div>
            <div className="about_img about_img4">
              <img src={aboutImg4} alt="" className="" />
            </div>
            <div className="about_img about_img5">
              <img src={aboutImg5} alt="" className="" />
            </div>
            <div className="about_img about_img6">
              <img src={aboutImg6} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
