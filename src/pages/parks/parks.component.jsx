import React, { useState, useEffect } from 'react';

import { Container, Main } from './parks.style';
import { CardList, Footer, Header } from '../../components'

const searchString = "https://epok.buenosaires.gob.ar/buscar?texto=verdes&clase=espacios_verdes_publicos%7C1"

const Parks = () => {
    const [places, fetchedPlaces] = useState([]);
    const [placesList, filteredPlaces] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    
    const updateSearchQuery = (input) => setSearchQuery(input);

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
        <Header searchQuery={searchQuery} updateSearchQuery={updateSearchQuery} kicker="Buenos Aires City's" title="PARKS"/>
            <Main>
                <CardList page="parks" places={placesList} />
            </Main>
            <Footer />
        </Container>
    );
}

export { Parks };