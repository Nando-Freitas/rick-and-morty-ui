import * as React from "react";


import { menuItemButton, styledMenuItem } from "./menu.style";

export default function Menu(props) {
  const { menuItems, setMenuItemSelected } = props;

  const selectMenuItem = (event) => {
    setMenuItemSelected(event.target.innerText);
  };

  return menuItems.map((menuItem) => {
    return (
      <ul>
        <li style={styledMenuItem}>
          <button
            style={{ ...menuItemButton }}
            onClick={(event) => selectMenuItem(event)}
          >
            {menuItem}
          </button>
        </li>
      </ul>
    );
  });
}
