import React from "react";
import icon from "../img/success_icon.svg";
import { Trans } from "react-i18next";

function AlertSuccess() {
  const alertHide = () => {
    document.getElementById("alert-success").style.display = "none";
  };

  return (
    <div className="alert_container" id="alert-success">
      <div className="alert_box">
        <div className="alert_top alert_top-success">
          <div className="alert_icon">
            <img src={icon} alt="" className="success_icon" />
          </div>
          <div className="alert_cloud alert_cloud1"></div>
          <div className="alert_cloud alert_cloud2"></div>
          <div className="alert_cloud alert_cloud3"></div>
        </div>
        <div className="alert_content">
          <div className="alert_data">
            <h1 className="alert_title">
              <Trans i18nKey="alert.success.title">Woo hoo!</Trans>
            </h1>
            <p className="alert_subtitle">
              <Trans i18nKey="alert.success.data">
                Your message was send. I will contact you.
              </Trans>
            </p>
          </div>
          <a onClick={() => alertHide()} href="#" className="btn btn_success">
            <Trans i18nKey="alert.success.button">Continue</Trans>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AlertSuccess;
