import React, { useState, useEffect } from 'react';

import { Container, Main } from './kids.style';
import { CardList, Footer, Header } from '../../components'

const searchString = "https://epok.buenosaires.gob.ar/buscar?texto=chicos&clase=actividades_para_chicos%7C1"

const Kids = () => {
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
        <Header searchQuery={searchQuery} updateSearchQuery={updateSearchQuery} />

            <Main>
                <CardList places={placesList} />
            </Main>
            <Footer />
        </Container>
    );
}

export { Kids };