import * as React from 'react';
import ShowItems from './showItems';
import Search from '../components/search';
import { useState } from 'react';

export default function Main() {
    const [search, setSearch] = useState('');

    return(
        <>
            <Search search={search} setSearch={setSearch}/>
            <ShowItems search={search}/>
        </>
    )
}