import * as React from 'react';
import ShowItems from './showItems';
import Search from '../components/search';
import Menu from '../components/menu';

import { useState } from 'react';

export default function Main() {
    const [search, setSearch] = useState('');
    const [menuItemSelected, setMenuItemSelected] = useState('');

    const menuItems = ['Characters', 'Episodes', 'Locations'];

    return(
        <>
            <Menu menuItems={menuItems} setMenuItemSelected={setMenuItemSelected}/>
            <Search search={search} setSearch={setSearch}/>
            <ShowItems search={search} menuItemSelected={menuItemSelected}/>
        </>
    )
}