import React, { useState, useEffect } from 'react';

import { useFetch } from '../../hooks';
import { Container, Main, ErrorImage } from './kids.style';
import { CardList, Footer, Header, Loader } from '../../components'

import wrong from '../../assets/img/Something-Went-Wrong.svg';

const Kids = () => {
    const searchString = "https://epok.buenosaires.gob.ar/buscar?texto=chicos&clase=actividades_para_chicos%7C1"
    const res = useFetch(searchString, {});
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const updateSearchQuery = (input) => setSearchQuery(input);

    useEffect(() => {
        if (res.places) setFilteredPlaces(res.places.filter(place => place.nombre.toLowerCase().includes(searchQuery.toLowerCase())));
    }, [searchQuery]);

    const handleScroll = () => {
        const offset = window.scrollY;
        offset > 200 ? setScrolled(true) : setScrolled(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    return (
        <Container>
        <Header scrolled={scrolled} searchQuery={searchQuery} updateSearchQuery={updateSearchQuery} kicker="Great Places To" title="VISIT WITH KIDS"/>
            <Main className={scrolled ? "main scrolled" : "main"}>
                {res.loading ? <Loader /> : null}
                {res.error ? <ErrorImage src={wrong} alt="Something went wrong" /> : null}
                {res.places ? <CardList page="kids" places={filteredPlaces ? filteredPlaces : res.places} /> : null}
            </Main>
            <Footer />
        </Container>
    );
};

export { Kids };