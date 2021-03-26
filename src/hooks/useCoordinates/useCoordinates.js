const useCoordinates = async(el) => {
    try {
        if (el) {
            const splitedCoordinates = el.ubicacion.centroide.split("(").pop().split(")").shift().split(" ");
            const convertedCoordinates = await fetch(`https://ws.usig.buenosaires.gob.ar/rest/convertir_coordenadas?x=${splitedCoordinates[0]}&y=${splitedCoordinates[1]}&output=lonlat`);
            const convertedCoordinatesJson = await convertedCoordinates.json();
            const lonLat = convertedCoordinatesJson.resultado;
            return lonLat;
        };
    } catch(err) {
        return err;
    };
};

export { useCoordinates };