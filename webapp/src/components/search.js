import * as React from 'react';
import { styledInputSearch } from './search.style';

export default function Search(props){
    const { search, setSearch } = props;

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    return(
        <>
            <input style={styledInputSearch} placeholder={'Search'} value={search} onChange={handleChange} type="text"></input>
        </>
    )
}