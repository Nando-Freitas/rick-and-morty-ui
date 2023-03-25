import * as React from 'react';
import Table from '../components/table';
import CharacterRepository from '../repository/characterRepository';
import { useState, useEffect } from "react";

export default function ShowCharacters() {
    const [characters, setCharacters] = useState({})

    useEffect(() => {
        getCharacters();
    }, [setCharacters]);

    const getCharacters = async () => {
        const characters = await new CharacterRepository().findAll();
        setCharacters(characters)
    }

    return (
        Object.keys(characters).length !== 0 && (<Table items={characters}/>)
    )
}