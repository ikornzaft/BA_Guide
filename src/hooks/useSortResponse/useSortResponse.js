const useSortResponse = (el) => { 
    let placeName, placeAddress, placeDays, placePhone, placeEmail, placeWebsite; 
    let noData = false;
    if (el) {
        el.contenido.forEach(id => {
            if (id.nombreId === "nombre") placeName = id.valor;
            if (id.nombreId === "direccion") placeAddress = id.valor;
            if (id.nombreId === "telefonos") placePhone = id.valor;
            if (id.nombreId === "dias_y_horarios") placeDays = id.valor;
            if (id.nombreId === "email") placeEmail = id.valor;
            if (id.nombreId === "pagina_web") placeWebsite = id.valor;
        });
        if (!placePhone && !placeDays && !placeEmail && !placeWebsite) noData = true;
    };

    return { placeName, placeAddress, placeDays, placePhone, placeEmail, placeWebsite, noData };
};

export { useSortResponse };