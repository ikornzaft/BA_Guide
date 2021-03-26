import React, { useState, useEffect } from 'react';
import { useFetch, useSortResponse } from '../../hooks';

import { MapComponent, BackButtonWithRouter, PlaceData, Footer } from '../../components';
import { Main, Container, Header, Title, Address, DataContainer } from './places.styles.jsx';

const Places = ({ match, history }) => {
    const searchString = `https://epok.buenosaires.gob.ar/getObjectContent?id=${match.params.id}`;
    useEff
    const res = useFetch(searchString, {});
    console.log('hola');
    // res contiene la respuesta de useFetch
    const sortedRes = useSortResponse(res);

    const [place, fetchedPlace] = useState(null);
    const [placeData, setPlaceData] = useState(`<p>Loading...<p>`);
    const [lonLatData, setLonLatData] = useState(null);
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        const fetchFunc = async() => {
            const response = await fetch(searchString);
            const resJson = await response.json();
            const splitedCoordinates = resJson.ubicacion.centroide.split("(").pop().split(")").shift().split(" ");
            const lonLat = await fetch(`https://ws.usig.buenosaires.gob.ar/rest/convertir_coordenadas?x=${splitedCoordinates[0]}&y=${splitedCoordinates[1]}&output=lonlat`);
            const lonLatJson = await lonLat.json();
            fetchedPlace(resJson);
            setLonLatData(lonLatJson.resultado);
        };
        fetchFunc();
    }, []);

    useEffect(() => {
        if (place) {
            setPlaceData([place.contenido[0].valor, place.contenido[1].valor, place.contenido[2].valor, place.contenido[3].valor, place.ubicacion.centroide, place.direccionNormalizada]);
        };
    }, [place]);

    useEffect(() => {
        if (lonLatData) {
            setCoordinates(lonLatData);
        };
    }, [placeData]);

    return (
        <Main>
            <Container>
                <BackButtonWithRouter text="Back To List"/>
                <Header>
                    <Title>{placeData[0]}</Title>
                    <Address>{placeData[5]}</Address>
                </Header>
                <DataContainer>
                    <PlaceData phone={placeData[1]} email={placeData[2]} web={placeData[3]} />
                    {(coordinates) ? <MapComponent coordinates={coordinates} text={placeData[0]}/> : null}
                </DataContainer>
            </Container>
            <Footer/>
        </Main>
    );
};

export { Places };
