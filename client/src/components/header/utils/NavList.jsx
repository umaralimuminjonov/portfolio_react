import React from "react";
import { navItems } from "./navData";
import NavItem from "./NavItem";

function NavList() {
  return (
    <ul className="nav_list grid">
      {navItems.map((item) => (
        <NavItem title={item.title} icon={item.icon} />
      ))}
    </ul>
  );
}

export default NavList;
