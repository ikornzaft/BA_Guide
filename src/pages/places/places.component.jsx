import React, { useState, useEffect } from 'react';

import './places.styles.css';
import { Map } from '../../components/map/map.component';

const Places = ({ match }) => {
    const searchString = `https://epok.buenosaires.gob.ar/getObjectContent?id=${match.params.id}`;

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

    console.log(coordinates);

    return (
        <div>
            <h1>Places</h1>
            <p>Nombre: {placeData[0]}</p>
            <p>Coordenadas: {placeData[4]}</p>
            <p>Dirección: {placeData[5]}</p>
            {(coordinates) ? <Map coordinates={coordinates}/> : null}
        </div>
    );

};

export { Places };
