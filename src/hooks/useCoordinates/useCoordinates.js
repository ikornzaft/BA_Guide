import React, { useState, useEffect } from 'react';

const useCoordinates = (el, setCoordX, setCoordY) => {
    const getCoordinates = async () => {
        try {
            const splitedCoordinates = el.ubicacion.centroide.split("(").pop().split(")").shift().split(" ");
            const convertedCoordinates = await fetch(`https://ws.usig.buenosaires.gob.ar/rest/convertir_coordenadas?x=${splitedCoordinates[0]}&y=${splitedCoordinates[1]}&output=lonlat`);
            const convertedCoordinatesJson = await convertedCoordinates.json();
            setCoordX(convertedCoordinatesJson.resultado.x);
            setCoordY(convertedCoordinatesJson.resultado.y);
        } catch(err) {
            return err;
        }
    };
    getCoordinates();
    
};

export { useCoordinates };