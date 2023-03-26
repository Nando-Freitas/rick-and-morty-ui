import * as React from 'react';
import Table from '../components/table';
import CharacterRepository from '../repository/characterRepository';
import EpisodesRepository from '../repository/episodesRepository';
import LocationRepository from '../repository/locationRepository';
import { useState, useEffect } from "react";

export default function ShowCharacters(props) {
    const { menuItemSelected, search } = props;

    const [characters, setCharacters] = useState({});
    const [episodes, setEpisodes] = useState({});
    const [location, setLocation] = useState({});

    useEffect(() => {
        getCharacters();
    }, [setCharacters]);

    const getCharacters = async () => {
        const characters = await new CharacterRepository().findAll();
        characters.areCharacters = true;
        setCharacters(characters);
    };

    useEffect(() => {
        getEpisodes();
    }, [setEpisodes]);

    const getEpisodes = async () => {
        const episodes = await new EpisodesRepository().findAll();
        episodes.areEpisodes = true;
        setEpisodes(episodes);
    };

    useEffect(() => {
        getLocation();
    }, [setLocation]);

    const getLocation = async () => {
        const location = await new LocationRepository().findAll();
        location.areLocations = true;
        setLocation(location);
    };

    if(menuItemSelected === 'Episodes') {
        return (
            Object.keys(episodes).length !== 0 && (<Table items={episodes} search={search}/>)
        )
    }

    if(menuItemSelected === 'Locations') {
        return (
            Object.keys(location).length !== 0 && (<Table items={location} search={search}/>)
        )
    }
    
    return (
        Object.keys(characters).length !== 0 && (<Table items={characters} search={search}/>)
    )
}