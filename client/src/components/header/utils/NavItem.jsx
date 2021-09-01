import React, { useState } from "react";
import { Trans } from "react-i18next";

function NavItem(props) {
  const [menu, setMenu] = useState(false);
  return (
    <li className="nav_item" onClick={() => setMenu(!menu)}>
      <a href={"#" + props.title.toLowerCase()} className="nav_link">
        {props.icon}
        <Trans i18nKey={"header." + props.title.toLowerCase()}>{props.title}</Trans>
      </a>
    </li>
  );
}

export default NavItem;
