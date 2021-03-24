import React, { useState, useEffect } from 'react';

import { useFetch } from '../../hooks';
import { Container, Main } from './museums.style';
import { CardList, Footer, Header } from '../../components'


const Museums = () => {
    const searchString = "https://epok.buenosaires.gob.ar/buscar?texto=Museo";
    const res = useFetch(searchString, {});
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState(null);
    const updateSearchQuery = (input) => setSearchQuery(input);
    
    useEffect(() => {
        if (res.places) setFilteredPlaces(res.places.filter(place => place.nombre.toLowerCase().includes(searchQuery.toLowerCase())));
    }, [searchQuery]);

    return (
        <Container>
            <Header searchQuery={searchQuery} updateSearchQuery={updateSearchQuery} kicker="Buenos Aires City's" title="MUSEUMS"/>
            <Main>
                {res.loading ? <p>Loading ... </p> : null}
                {res.error ? <p>ERROR</p> : null}
                {res.places ? <CardList page="museums" places={filteredPlaces ? filteredPlaces : res.places} /> : null}
            </Main>
            <Footer />
        </Container>
    );
} 
  
export { Museums };