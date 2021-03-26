import { useState, useEffect } from 'react';

const useFetch = (url, options) => { 
    const [places, setPlaces] = useState(null);
    const [place, setPlace] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                if (response.status >= 400 && response.status < 600) setError('Bad response from server');
                const resJson = await response.json();
                setPlaces(resJson.instancias);
                setPlace(resJson);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { places, place, error, loading };
};

export { useFetch };