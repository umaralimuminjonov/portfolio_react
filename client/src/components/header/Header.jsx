import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  UilListUiAlt,
  UilMoon,
  UilTimes,
  UilSun,
} from "@iconscout/react-unicons";
import { useTranslation } from "react-i18next";
import NavList from "./utils/NavList";

function Header() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("Eng");
  const [isDark, setIsDark] = useState(false);

  const changeLanguage = (language, e) => {
    i18n.changeLanguage(language);
    setLanguage(e.target.innerText);
  };

  const [menu, setMenu] = useState(false);

  const changeTheme = () => {
    document.body.classList.toggle("dark-theme");
    setIsDark(!isDark);
  };

  const styleMenu = {
    bottom: menu ? 0 : "-200%",
  };

  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setScrollHeader(window.pageYOffset > 100);
      });
    }
  }, []);

  return (
    <header
      className={`header ${scrollHeader ? "scroll-header" : ""}`}
      id="header"
    >
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
            <div className="nav_selected">
              <h4 className="nav_selected-text icon">{language}</h4>
            </div>
            <div className="nav_options">
              <h4
                onClick={(e) => changeLanguage("en", e)}
                className="nav_option rpl"
              >
                Eng
              </h4>
              <h4
                onClick={(e) => changeLanguage("ru", e)}
                className="nav_option rpl"
              >
                Rus
              </h4>
              <h4
                onClick={(e) => changeLanguage("uz", e)}
                className="nav_option rpl"
              >
                Uzb
              </h4>
            </div>
          </div>
          <div onClick={() => changeTheme()} className="change-theme">
            {isDark ? (
              <UilSun className="icon" />
            ) : (
              <UilMoon className="icon" />
            )}
          </div>

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
