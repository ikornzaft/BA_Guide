import React, { useState, useEffect } from 'react';

import { Container, Header, Main } from './kids.style';
import { CardList, SearchBox, Footer, BackButtonWithRouter } from '../../components'

const searchString = "https://epok.buenosaires.gob.ar/buscar?texto=chicos&clase=actividades_para_chicos%7C1"

const Kids = () => {
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
                <h2 className="header-kicker">Great Places To</h2>
                <h1 className="header-title">VISIT WITH KIDS</h1>
                <SearchBox type="search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search location" />
            </Header>
            <Main>
                <CardList places={placesList} />
            </Main>
            <Footer />
        </Container>
    );
}

export { Kids };