import React from "react";
import icon from "../img/wrong_icon.svg";
import { Trans } from "react-i18next";

function AlertWrong() {
  const alertHide = () => {
    document.getElementById("alert-wrong").style.display = "none";
  };

  return (
    <div className="alert_container" id="alert-wrong">
      <div className="alert_box">
        <div className="alert_top alert_top-wrong">
          <div className="alert_icon">
            <img src={icon} alt="" className="wrong_icon" />
            <div className="icon_shadow"></div>
          </div>
          <div className="alert_round"></div>
        </div>
        <div className="alert_content">
          <div className="alert_data">
            <h1 className="alert_title">
              <Trans i18nKey="alert.wrong.title">Uh oh.</Trans>
            </h1>
            <p className="alert_subtitle">
              <Trans i18nKey="alert.wrong.data">
                Something wierd happened. Keep calm and try again
              </Trans>
            </p>
          </div>
          <a
            onClick={() => alertHide()}
            href="#contact"
            className="btn btn_wrong"
          >
            <Trans i18nKey="alert.success.button">Try again</Trans>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AlertWrong;
