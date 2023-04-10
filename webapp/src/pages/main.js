import * as React from 'react';
import ShowItems from './showItems';
import Search from '../components/search';
import Menu from '../components/menu';
import Footer from '../components/footer';
import { useState } from 'react';

import { StyledMenu, StyledSearch, StyledImage, StyledTable } from './main.style';

export default function Main() {
    const [search, setSearch] = useState('');
    const [menuItemSelected, setMenuItemSelected] = useState('');

    const date = new Date();

    const menuItems = ['Characters', 'Episodes', 'Locations'];

    const year = () => { return date.getFullYear()}

    return(
        <div style={{ backgroundColor: '#9018be'}}>
            <div style={StyledImage}><img style={{'width': '350px', 'height': '350px'}}alt={'Rick and Morty'} src={'../rick_and_morty.png'} /></div>
            <div style={StyledMenu}><Menu menuItems={menuItems} setMenuItemSelected={setMenuItemSelected}/></div>
            <div style={StyledSearch}><Search search={search} setSearch={setSearch}/></div>
            <div style={StyledTable}>
                <div><ShowItems search={search} menuItemSelected={menuItemSelected}/></div>
            </div>
            <div style={{backgroundColor: 'white', height: '50px', paddingTop: '10px'}}>
                <Footer msg={`Fernando Personal Project ${year()}`}/>
            </div>
        </div>
    )
}