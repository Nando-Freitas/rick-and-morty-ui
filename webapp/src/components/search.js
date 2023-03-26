import * as React from 'react';

export default function Search(props){
    const { search, setSearch } = props;

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    return(
        <>
            <input value={search} onChange={handleChange} type="text"></input>
        </>
    )
}