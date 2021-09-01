import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UilListUiAlt, UilMoon, UilTimes } from "@iconscout/react-unicons";
import { useTranslation } from "react-i18next";
import NavList from "./utils/NavList";

function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
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
          <select className="nav_select icon">
            <option onClick={() => changeLanguage("en")} className="nav_option">
              Eng
            </option>
            <option onClick={() => changeLanguage("ru")} className="nav_option">
              Rus
            </option>
            <option onClick={() => changeLanguage("uz")} className="nav_option">
              Uzb
            </option>
          </select>
          <UilMoon onClick={() => changeTheme()} className="change-theme icon" />
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
