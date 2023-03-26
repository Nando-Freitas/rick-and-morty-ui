import * as React from 'react';

export default function Menu(props) {
    const { menuItems, setMenuItemSelected } = props;

    const selectMenuItem = (event) => {
        setMenuItemSelected(event.target.innerText);
    }
    
    return menuItems.map(menuItem => {
            return(
            <ul>
                <li><button onClick={(event) => selectMenuItem(event)}>{menuItem}</button></li>
            </ul>)
    });
}