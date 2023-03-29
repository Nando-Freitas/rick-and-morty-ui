import * as React from "react";
import { useState } from "react";

import { menuItemButton, styledMenuItem } from "./menu.style";

export default function Menu(props) {
  const { menuItems, setMenuItemSelected } = props;

  const [hoverStyle, setHoverStyle] = useState({});

  const selectMenuItem = (event) => {
    setMenuItemSelected(event.target.innerText);
  };

  return menuItems.map((menuItem) => {
    return (
      <ul>
        <li style={styledMenuItem}>
          <button
            style={{ ...menuItemButton, ...hoverStyle }}
            onMouseOver={() => setHoverStyle({ color: '#97ce4c', cursor:'pointer' })}
            onMouseLeave={() => setHoverStyle({ color: '#44281d' })}
            onClick={(event) => selectMenuItem(event)}
          >
            {menuItem}
          </button>
        </li>
      </ul>
    );
  });
}
