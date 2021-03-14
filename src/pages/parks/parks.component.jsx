import React, { useState, useEffect } from 'react';

import { Container, Header, Main } from './parks.style';
import { CardList, SearchBox, Footer, BackButtonWithRouter } from '../../components'

const searchString = "https://epok.buenosaires.gob.ar/buscar?texto=verdes&clase=espacios_verdes_publicos%7C1"

const Parks = () => {
    const [places, fetchedPlaces] = useState([]);
    const [placesList, filteredPlaces] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    
    useEffect(() => {
        const fetchFunc = async () => {
            const response = await fetch(searchString);
            const resJson = await response.json();
            fetchedPlaces(resJson.instancias);
            filteredPlaces(resJson.instancias);
        };
        fetchFunc();
    }, []);
    
    useEffect(() => {
        searchQuery ? filteredPlaces(places.filter(place => place.nombre.toLowerCase().includes(searchQuery.toLowerCase()))) : filteredPlaces(places)
    }, [searchQuery]);

    return (
        <Container>
            <BackButtonWithRouter text="Back To Homepage" />
            <Header>
                <h2 className="header-kicker">Buenos Aires City's</h2>
                <h1 className="header-title">PARKS</h1>
                <SearchBox type="search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search location" />
            </Header>
            <Main>
                <CardList places={placesList} />
            </Main>
            <Footer />
        </Container>
    );
}

export { Parks };