import { useState, useEffect } from 'react';

const useFetch = (url, options) => { 
    const [places, setPlaces] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const resJson = await response.json();
                setPlaces(resJson.instancias);
            } catch(err) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { places, error, loading };
};

export { useFetch };