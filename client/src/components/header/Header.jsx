import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UilListUiAlt, UilMoon, UilTimes } from "@iconscout/react-unicons";
import { useTranslation } from "react-i18next";
import NavList from "./utils/NavList";

function Header() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("Eng");
  const [languageShow, setLanguageShow] = useState(false);

  const changeLanguage = (language, e) => {
    i18n.changeLanguage(language);
    setLanguageShow(!languageShow);
    setLanguage(e.target.innerText);
  };

  const [menu, setMenu] = useState(false);

  const changeTheme = () => {
    document.body.classList.toggle("dark-theme");
  };

  const styleMenu = {
    bottom: menu ? 0 : "-100%",
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav_logo">
          U<span className="nav_logo-span">A</span>
        </Link>
        <div style={styleMenu} className="nav_menu">
          <NavList />
          <UilTimes className="nav_close icon" onClick={() => setMenu(!menu)} />
        </div>

        <div className="nav_btns">
          <div className="nav_select">
            <h4
              className="nav_selected"
              onClick={() => setLanguageShow(!languageShow)}
            >
              {language}
            </h4>
            <div
              className={`nav_options ${languageShow && "nav_options-show"}`}
            >
              <h4
                onClick={(e) => changeLanguage("en", e)}
                className="nav_option"
              >
                Eng
              </h4>
              <h4
                onClick={(e) => changeLanguage("ru", e)}
                className="nav_option"
              >
                Rus
              </h4>
              <h4
                onClick={(e) => changeLanguage("uz", e)}
                className="nav_option"
              >
                Uzb
              </h4>
            </div>
          </div>
          <UilMoon
            onClick={() => changeTheme()}
            className="change-theme icon"
          />
          <UilListUiAlt
            className="nav_toggle icon"
            onClick={() => setMenu(!menu)}
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
