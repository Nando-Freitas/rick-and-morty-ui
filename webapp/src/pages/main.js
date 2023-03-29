import * as React from 'react';
import ShowItems from './showItems';
import Search from '../components/search';
import Menu from '../components/menu';

import { useState } from 'react';

import { StyledMenu, StyledSearch, StyledImage } from './main.style';

export default function Main() {
    const [search, setSearch] = useState('');
    const [menuItemSelected, setMenuItemSelected] = useState('');

    const menuItems = ['Characters', 'Episodes', 'Locations'];

    return(
        <div style={{ backgroundColor: '#9018be'}}>
            <div style={StyledImage}><img style={{'width': '350px', 'height': '350px'}}alt={'Rick and Morty'} src={'../rick_and_morty.png'} /></div>
            <div style={StyledMenu}><Menu menuItems={menuItems} setMenuItemSelected={setMenuItemSelected}/></div>
            <div style={StyledSearch}><Search search={search} setSearch={setSearch}/></div>
            <div style={StyledSearch}><ShowItems search={search} menuItemSelected={menuItemSelected}/></div>
        </div>
    )
}